
function Table({data, config, generateKey}) {

    const renderedHeaders = config.map(column => {
        return <th key={column.label}>{column.label}</th>
    })

    const renderedRows = data.map(row => {
        const renderedCells = config.map(col => {
            return <td key={col.label} className={'p-3'}>{col.render(row)}</td>
        })
        return (
            <tr key={generateKey(row)} className={'border-b'}>
                {renderedCells}
            </tr>
        )
    })

    return (
        <table className={'table-auto border-spacing-2'}>
            <thead>
                <tr className={'border-b-2'}>
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>{renderedRows}</tbody>
        </table>
    )
}

export default Table