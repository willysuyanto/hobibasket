import React from 'react';
import { Table as AntTable } from 'antd';


const DataTable = (props) => {
  const { className, dataSource = [], expandedRow, rowClickHandler, rowKey, scroll, paginationConfig, ...rest } = props;

  return (
    <AntTable
      className={`${className ?? ''} inf-list-table`}
      dataSource={dataSource}
      onRow={(record) => ({
        onClick: rowClickHandler ? () => rowClickHandler(record) : undefined,
        style: rowClickHandler ? { cursor: 'pointer' } : undefined,
      })}
      pagination={{
        ...paginationConfig,
        showTotal: (total, [from, to]) => `Showing ${from}-${to} of ${total}`,
        showSizeChanger: true,
      }}
      rowKey={rowKey}
      scroll={scroll}
      size="middle"
      {...rest}
    />
  );
};

export default DataTable;