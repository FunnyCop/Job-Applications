import React from "react"

const Sort = props => {

    return (

        <div className = "Modal">

            <div className = "Form" id = "ContactForm">

                <div className = "FormHeader">

                    <h3 className = "HeadingText">Sort</h3>

                    <span>

                            <button className = "ClearFormButton"
                                onClick = { () => props.getTable( "Job Applications" ) }>Reset</button>

                            <button className = "CloseModalButton"
                                onClick = { () => props.setModal( null ) }>x</button>

                    </span>

                </div>

                <div className = "FormBody" id = "Sort">

                    <button className = "SortButton"
                        onClick = { () => props.getTable( "Sort Open" ) }>Open</button>

                </div>

            </div>

        </div>

    )

}

export default Sort