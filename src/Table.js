import React from 'react';

const Table = (props) => {
    const {data, headers } = props;
    return (<div>
        <table>
            <thead>
                <tr>
                    <td>
                        {
                            headers.map( (h) => {
                                // h is {label: 'Name', id: 'name'}
                                return <td key={h.label}>{h.label}</td>;
                        })
                        }
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data.map( (d, i) => {
                        // d = {name: 'matt', age: 25}
                        return <tr key={`row-${i}`}>
                            {
                                headers.map( (h, j) => {
                                    // h is {label: 'Name', id: 'name', component: Checkbox} *but not all of them have it
                                    // gives option to a custom optional component to this table
                                    const CellComponent = h.Component;
                                    const label = d[h.id];
                                    const key = `cell-${i}-${j}`;
                                    if(CellComponent){
                                        return <CellComponent key={key} label={label}/>
                                    }
                                    return <td key={key}>{label}</td>;
                                })
                            }
                            {/*This is still hard coded and the view should not be aware of what is in the model*/}
                            {/*<td>{d.name}</td>*/}
                            {/*<td>{d.age}</td>*/}
                        </tr>;
                    })
                    }
                    </td>
                </tr>
            </tbody>
        </table>
    </div>);
}

export default Table;