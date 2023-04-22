import React from 'react';

const country = (props) => {
    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Country Name</th>
                            <th scope={"col"}>Country Continent</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.country.map((term: T)=>{
                            return(
                                <tr>
                                    <td>{term.name}</td>
                                    <td>{term.continent} </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default country;