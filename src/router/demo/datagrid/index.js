import React from 'react'
import { DataGrid } from 'ttk-component'
const Column = DataGrid.Column 
const Cell =  DataGrid.Cell
class DatagridDemo extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    renderColums = () => {
        const data = [
            {
                fieldName: 'a',
                caption: 'title',
            },
            {
                fieldName: 'a1',
                caption: 'title1',
            },
            {
                fieldName: 'a2',
                caption: 'title2',
            }
        ]

        return data.map(element => {
            return (
                <DataGrid.Column
                    key={element.fieldName}
                    name = {element.fieldName}
                    columnKey={element.fieldName}
                    header={<DataGrid.Cell>{element.caption}</DataGrid.Cell>}
                    cell={({rowIndex, ...props}) => {
                        return <DataGrid.Cell {...props} tip={true}
                        key={rowIndex}>
                            {rowIndex}
                        </DataGrid.Cell>
                    }}
                    flexGrow={1}
                    width={60}
                />
            )
        })
    }

    render(){
        const rows = [{a: 1, a1: 2, a2: 3}]
        return (
            <div>
                <p>根据fixed-data-table-2封装</p>
                <p>demo</p>
                <DataGrid
                    rowHeight={50}
                    rowsCount={100}
                    width={5000}
                    height={5050}
                    headerHeight={50}
                    data={rows}
                    columns={this.renderColums()}
                >
                    
                </DataGrid>
            </div>
        )
    }
}

export default DatagridDemo