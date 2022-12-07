import React, {ChangeEvent} from 'react'

type ProfileStatusType = {
    status: string
    updateStatusThunk: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusThunk(this.state.status)
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })

    }

    render() {
        return <div>
            {!this.state.editMode &&
                <div>
                    <span style={{color: 'white'}}
                          onDoubleClick={this.activateEditMode}>{this.props.status || '-----'}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input onChange={this.onChangeHandler} onBlur={this.deactivateEditMode} autoFocus={true}
                           value={this.state.status}/>
                </div>}
        </div>
    }


}
