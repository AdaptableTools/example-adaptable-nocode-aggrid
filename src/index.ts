import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';

import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-balham.css';

import nocode from '@adaptabletools/adaptable-plugin-nocode-aggrid';
import { AdaptableOptions, PredefinedConfig } from '@adaptabletools/adaptable/types';

import Adaptable from '@adaptabletools/adaptable/agGrid';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { SparklinesModule } from '@ag-grid-enterprise/sparklines';
import { GridChartsModule } from '@ag-grid-enterprise/charts';
import { ClipboardModule } from '@ag-grid-enterprise/clipboard';
import { FiltersToolPanelModule } from '@ag-grid-enterprise/filter-tool-panel';
import { StatusBarModule } from '@ag-grid-enterprise/status-bar';
import { RichSelectModule } from '@ag-grid-enterprise/rich-select';
import { Module } from '@ag-grid-community/core';
import { SideBarModule } from '@ag-grid-enterprise/side-bar';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
import { RangeSelectionModule } from '@ag-grid-enterprise/range-selection';
import { ExcelExportModule } from '@ag-grid-enterprise/excel-export';

const adaptableOptions: AdaptableOptions = {
  primaryKey: '',
  userName: 'Demo User',
  adaptableId: 'Nocode Plugin Basic Demo',

  predefinedConfig: {} as PredefinedConfig,

  plugins: [
    nocode({
      onInit: (adaptableOptions) => {
        adaptableOptions.gridOptions.suppressFieldDotNotation = true;
      },
    }),
  ],
};

const agGridModules: Module[] = [
  ClientSideRowModelModule,
  SideBarModule,
  ColumnsToolPanelModule,
  FiltersToolPanelModule,
  StatusBarModule,
  MenuModule,
  RangeSelectionModule,
  RichSelectModule,
  ExcelExportModule,
  GridChartsModule,
  SparklinesModule,
  RowGroupingModule,
  ClipboardModule,
];

Adaptable.init(adaptableOptions, { agGridModules }).then((api) => {
  console.log(api, '!!!');
});
