### XLSX 解析 excle

#### 安装 xlsx

```bash
yarn add  xlsx
```

#### antd dom

```html
<Upload
  showUploadList={false}
  customRequest={customReq}
  accept="application/vnd.ms-excel,.xls,.xlsx"
>
  <Button>批量导入</Button>
</Upload>
```

#### 自定义请求处理

```js
import XLSX from 'xlsx';
import _forEach from 'lodash/forEach';

enum File2ArrayEnum {
  name = '材料名称',
  format = '规格型号',
  need = '需求量',
  unit = '单位',
  level = '档次',
  brand = '品牌',
  quotation = '报价数',
  remark = '备注',
}

// 自定义请求获取excle 数据
const customReq = (e: any) => {
  const f = e?.file;
  const reader = new FileReader(); // 使用 FileReader 读取数据
  reader.onload = (ev: any) => {
    // 数据读取完成后的回调函数
    const data = new Uint8Array(ev?.target?.result);
    const workbook = XLSX.read(data, { type: 'array' }); // workbook 是 xlsx 解析 excel 后返回的对象
    const firstSheetName = workbook.SheetNames[0]; // 获取第一个 sheet 的名字
    const worksheet = workbook.Sheets[firstSheetName]; // 获取第一个 sheet 的内容
    const res = XLSX.utils.sheet_to_json(worksheet); // 使用 utils 里的方法转换内容为便于使用的数组

    // 对数组进行处理
    const tempData = res.map((item: any) => {
      let temp = {};
      _forEach(File2ArrayEnum, (value, key) => {
        temp = { ...temp, [key]: item?.[value] };
      });
      return temp;
    });
    setList((pre) => [...pre, ...tempData]);
  };
  reader.readAsArrayBuffer(f); // 读取数据
};
```
