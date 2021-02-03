import request from './request'

export async function queryCarMigrationData (params) { // 根据区域、企业查询车辆偏移数据
  return request({
    url: '/api/gpsservice/v2/paths', // ?areaCodeList=111&companyId=222&endTime=2020-08-09&startTime=2020-08-10
    method: 'get',
    params: params
  })
}

export async function queryAllAreaCarMigrationData (params) { // 查询所有区偏移数据、偏移数据总览
  return request({
    url: '/api/gpsservice/v2/paths/search', // ?areaCodeList=111&companyId=222&endTime=2020-08-09&startTime=2020-08-10
    method: 'get',
    params: params
  })
}

export async function queryCarAndCompanyData (params) { // 根据区域查询区内区外企业及车辆数量
  return request({
    url: '/api/gpsservice/v2/paths/vehicles/search', // ?areaCodeList=111&endTime=2020-08-09&startTime=2020-08-10
    method: 'get',
    params: params
  })
}
