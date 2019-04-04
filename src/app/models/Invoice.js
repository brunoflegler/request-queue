'use strict'

module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define(
    'Invoice',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING
      },
      total: {
        type: DataTypes.DECIMAL
      }
    },
    { tableName: 'invoices' }
  )

  return Invoice
}
