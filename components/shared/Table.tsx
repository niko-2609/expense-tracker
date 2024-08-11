'use client'
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
// Theme
import { ColDef, ModuleRegistry } from '@ag-grid-community/core';
import { AgGridReact } from '@ag-grid-community/react';
// React Grid Logic
import '@ag-grid-community/styles/ag-grid.css';
// Core CSS
import '@ag-grid-community/styles/ag-theme-quartz.css';
import '@ag-grid-community/styles/ag-theme-quartz.min.css';
import '@ag-grid-community/styles/ag-theme-balham.min.css';
import '@ag-grid-community/styles/ag-theme-material.min.css';
import React, { StrictMode, useState } from 'react';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

// Row Data Interface
interface IRow {
    make: string;
    model: string;
    price: number;
    electric: boolean;
}


export function TableList({rowData}:{rowData: any[]}) {
  
  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "id" },
    { field: "name" },
    { field: "category" },
    {field: "date"},
    { field: "amount" },
 
  ]);
 
  const defaultColDef: ColDef = {
    flex: 1,
};

// Container: Defines the grid's theme & dimensions.
return (
    <div
        className="ag-theme-material-dark w-full max-h-full rounded-xl py-2 px-4"
    >
        <AgGridReact 
            rowData={rowData} 
            columnDefs={colDefs} 
            defaultColDef={defaultColDef}
            suppressMovableColumns={true}
            
        />
    </div>
);
};

