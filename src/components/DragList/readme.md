### 说明

列表拖拽组件
| 属性              | 说明             | 类型     | 默认值 |
| ----------------- | ---------------- | -------- | ------ |
| index             | 当前行的数组下标 | Number   | 必填   |
| list              | 列表数组         | Array    | 必填   |
| handleChangeEvent | 拖拽下标改变事件 | Function | 必填   |
![example](.\example.gif)

```
{
list.map((item: any, index: number) => {
    return (
        <li draggable="true" key={item.code}>
        <div className="drag-content">
            <img src={this.checkIsSelected(item.code) ? SelectedIcon : UnselectedIcon} className="select-icon" onClick={() => this.changeStatus(item) } alt="加载中"/>
            <span className="select-text" >{item.name}
            {
                item.name === '其他' ? <span className="select-text-tips">现场人员自行输入</span> : null
            }
            </span>
            <DragList
            list={list}
            index={index}
            handleChangeEvent={(currentIndex: number, replaceIndex: number) => { this.handleChangeEvent(currentIndex, replaceIndex); }}
            >
            <img
                src={DragIcon}
                className="select-drag"
                alt="加载中"
            />
            </DragList>
        </div>
        </li>
    );
})
```

有问题或者需要扩展联系，余志强
create 2021/1/27 余志强