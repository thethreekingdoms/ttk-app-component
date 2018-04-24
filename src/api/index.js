/**
 * 所有API的访问入口，统一对外访问
 */

//人员
import { person } from './api'
//存货
import { inventory } from './api'
//部门
import { department } from './api'
//客户
import { customer } from './api'
//供应商
import { vendor as supplier } from './api'
//项目
import { project } from './api'
//计量单位
import * as unit from './api'
//银行账号
import { bankaccount } from './api'
//币种
import * as currency from './api'
//科目
import * as account from './api'
// 采购单
import { arrival } from './api'
// 销售单
import { delivery } from './api'

export default {
    'person': person,
    'inventory': inventory,
    'department': department,
    'customer': customer,
    'supplier': supplier,
    'project': project,
    'unit': unit,
    'bankaccount': bankaccount,
    'currency': currency,
    'account': account,
    'arrival': arrival,
    'delivery': delivery
}