import React from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>URL</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = ({linkData, removeLink}) => { 

    const rows = linkData ? linkData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td><a href={row.URL}>{row.URL}</a></td>
                <td><button onClick={() => removeLink(index)}>Delete</button></td>
            </tr>
        );
    }):null;

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { linkData, removeLink } = props;
    return (
    <div>

        <TableHeader/>
        <TableBody linkData = {linkData}
        removeLink = {removeLink}/>
        
    </div>
    );

}

export default Table;