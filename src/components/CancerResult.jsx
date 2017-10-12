import { List } from 'antd-mobile';

const Item = List.Item;

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.location.state;
    }
    render() {
        return (
            <div>
                <List renderHeader={() => '基本信息'} className="health-data">
                    <Item extra={this.state.name}>姓名</Item>
                    <Item extra={this.state.uid}>体检号</Item>
                    <Item extra={this.state.city}>城市</Item>
                    <Item extra={this.state.age}>年龄</Item>
                    <Item extra={this.state.gender ? '男' : '女'}>性别</Item>
                </List>
                <List renderHeader={() => '体检数据'} className="health-data">
                    <Item wrap extra={this.state.height}>身高</Item>
                    <Item wrap extra={this.state.weight}>体重</Item>
                    <Item 
                        wrap 
                        extra={
                            <span className={this.state.BMI < 18.5 ? 'below' : this.state.BMI >= 24 ? 'beyond' : ''}>
                                {this.state.BMI}
                            </span>
                        }
                    >
                        体重指数(BMI)
                    </Item>
                    <Item 
                        wrap 
                        extra={
                            <span className={this.state.shousuoya < 90 ? 'below' : this.state.shousuoya > 140 ? 'beyond' : ''}>
                                {this.state.shousuoya}
                            </span>
                        }
                    >
                        体检血压收缩压
                    </Item>
                    <Item 
                        wrap 
                        extra={
                            <span className={this.state.shuzhangya < 60 ? 'below' : this.state.shuzhangya > 90 ? 'beyond' : ''}>
                                {this.state.shuzhangya}
                            </span>
                        }
                    >
                        体检血压舒张压
                    </Item>
                    <Item 
                        wrap 
                        extra={
                            <span className={this.state.WBC < 4 ? 'below' : this.state.WBC > 10 ? 'beyond' : ''}>
                                {this.state.WBC}
                            </span>
                        }
                    >
                        白细胞计数(WBC)
                    </Item>
                    <Item 
                        wrap 
                        extra={
                            <span className={this.state.RBC < 3.5 ? 'below' : this.state.RBC > 5.2 ? 'beyond' : ''}>
                                {this.state.RBC}
                            </span>
                        }
                    >
                        红细胞计数(RBC)
                    </Item>
                    <Item 
                        wrap 
                        extra={
                            <span className={this.state.HGB < 113 ? 'below' : this.state.HGB > 151 ? 'beyond' : ''}>
                                {this.state.HGB}
                            </span>
                        }
                    >
                        血红蛋白(HGB)
                    </Item>
                    <Item 
                        wrap 
                        extra={
                            <span className={this.state.HCT < 35 ? 'below' : this.state.HCT > 48 ? 'beyond' : ''}>
                                {this.state.HCT}
                            </span>
                        }
                    >
                        红细胞压积(HCT)
                    </Item>
                    <Item 
                        wrap 
                        extra={
                            <span className={this.state.MCV < 80 ? 'below' : this.state.MCV > 97 ? 'beyond' : ''}>
                                {this.state.MCV}
                            </span>
                        }
                    >
                        平均红细胞体积(MCV)
                    </Item>
                    <Item 
                        wrap 
                        extra={
                            <span className={this.state.MCH < 26.5 ? 'below' : this.state.MCH > 33.5 ? 'beyond' : ''}>
                                {this.state.MCH}
                            </span>
                        }
                    >
                        平均红细胞血红蛋白含量(MCH)
                    </Item>
                    <Item 
                        wrap 
                        extra={
                            <span className={this.state.MCHC < 315 ? 'below' : this.state.MCHC > 360 ? 'beyond' : ''}>
                                {this.state.MCHC}
                            </span>
                        }
                    >
                        平均红细胞血红蛋白浓度(MCHC)
                    </Item>
                    <Item 
                        wrap 
                        extra={
                            <span className={this.state.RDWCV < 10 ? 'below' : this.state.RDWCV > 15 ? 'beyond' : ''}>
                                {this.state.RDWCV}
                            </span>
                        }
                    >
                        红细胞体积分布宽度变异系数(RDWCV)
                    </Item>
                    <Item 
                        wrap 
                        extra={
                            <span className={this.state.RDWSD < 40 ? 'below' : this.state.RDWSD > 53 ? 'beyond' : ''}>
                                {this.state.RDWSD}
                            </span>
                        }
                    >
                        红细胞体积分布宽度标准差(RDWSD)
                    </Item>
                    <Item 
                        wrap 
                        extra={
                            <span className={this.state.PLT < 100 ? 'below' : this.state.PLT > 350 ? 'beyond' : ''}>
                                {this.state.PLT}
                            </span>
                        }
                    >
                        血小板(PLT)
                    </Item>
                    <Item 
                        wrap 
                        extra={
                            <span className={this.state.MPV < 6.5 ? 'below' : this.state.MPV > 12.5 ? 'beyond' : ''}>
                                {this.state.MPV}
                            </span>
                        }
                    >
                        平均血小板体积(MPV)
                    </Item>
                    <Item 
                        wrap 
                        extra={
                            <span className={this.state.PDW < 10 ? 'below' : this.state.PDW > 17 ? 'beyond' : ''}>
                                {this.state.PDW}
                            </span>
                        }
                    >
                        血小板容积分布宽度(PDW)
                    </Item>
                    <Item 
                        wrap 
                        extra={
                            <span className={this.state.MON < 2 ? 'below' : this.state.MON > 12 ? 'beyond' : ''}>
                                {this.state.MON}
                            </span>
                        }
                    >
                        中间细胞百分比(MON)
                    </Item>
                    <Item 
                        wrap 
                        extra={
                            <span className={this.state.MON_ < 0.14 ? 'below' : this.state.MON_ > 0.8 ? 'beyond' : ''}>
                                {this.state.MON_}
                            </span>
                        }
                    >
                        中间细胞绝对值(MON#)
                    </Item>
                    <Item 
                        wrap 
                        extra={
                            <span className={this.state.GRA < 43 ? 'below' : this.state.GRA > 72 ? 'beyond' : ''}>
                                {this.state.GRA}
                            </span>
                        }
                    >
                        中性粒细胞百分比(GRA)
                    </Item>
                    <Item 
                        wrap 
                        extra={
                            <span className={this.state.GRA_ < 1.2 ? 'below' : this.state.GRA_ > 6.79 ? 'beyond' : ''}>
                                {this.state.GRA_}
                            </span>
                        }
                    >
                        中性粒细胞绝对值(GRA#)
                    </Item>
                    <Item 
                        wrap 
                        extra={
                            <span className={this.state._LYM < 17.5 ? 'below' : this.state._LYM > 48 ? 'beyond' : ''}>
                                {this.state._LYM}
                            </span>
                        }
                    >
                        淋巴细胞百分比(%LYM)
                    </Item>
                    <Item 
                        wrap 
                        extra={
                            <span className={this.state.LYM_ < 1.2 ? 'below' : this.state.LYM_ > 3.2 ? 'beyond' : ''}>
                                {this.state.LYM_}
                            </span>
                        }
                    >
                        淋巴细胞绝对值(LYM#)
                    </Item>
                    <Item 
                        wrap 
                        extra={
                            <span className={this.state.ALT < 0 ? 'below' : this.state.ALT > 40 ? 'beyond' : ''}>
                                {this.state.ALT}
                            </span>
                        }
                    >
                        丙氨酸氨基转移酶(ALT)
                    </Item>
                    <Item 
                        wrap 
                        extra={
                            <span className={this.state.Urea < 1.7 ? 'below' : this.state.Urea > 8.3 ? 'beyond' : ''}>
                                {this.state.Urea}
                            </span>
                        }
                    >
                        尿素(Urea)
                    </Item>
                    <Item 
                        wrap 
                        extra={
                            <span className={this.state.Cr < 20 ? 'below' : this.state.Cr > 100 ? 'beyond' : ''}>
                                {this.state.Cr}
                            </span>
                        }
                    >
                        肌酐(Cr)
                    </Item>
                    <Item 
                        wrap 
                        extra={
                            <span className={this.state.UA < 90 ? 'below' : this.state.UA > 360 ? 'beyond' : ''}>
                                {this.state.UA}
                            </span>
                        }
                    >
                        尿酸(UA)
                    </Item>
                    <Item 
                        wrap 
                        extra={
                            <span className={this.state.TC < 2.33 ? 'below' : this.state.TC > 5.18 ? 'beyond' : ''}>
                                {this.state.TC}
                            </span>
                        }
                    >
                        总胆固醇(TC)
                    </Item>
                    <Item 
                        wrap 
                        extra={
                            <span className={this.state.TG < 0.2 ? 'below' : this.state.TG > 1.72 ? 'beyond' : ''}>
                                {this.state.TG}
                            </span>
                        }
                    >
                        甘油三酯(TG)
                    </Item>
                    <Item 
                        wrap 
                        extra={
                            <span className={this.state.FPG < 3.6 ? 'below' : this.state.FPG > 6.11 ? 'beyond' : ''}>
                                {this.state.FPG}
                            </span>
                        }
                    >
                        空腹血糖(FPG)
                    </Item>
                    <Item 
                        wrap 
                        extra={
                            <span className={this.state.SG < 1.004 ? 'below' : this.state.SG > 1.03 ? 'beyond' : ''}>
                                {this.state.SG}
                            </span>
                        }
                    >
                        比重(SG)
                    </Item>
                    <Item 
                        wrap 
                        extra={
                            <span className={this.state.pH < 4.5 ? 'below' : this.state.pH > 8 ? 'beyond' : ''}>
                                {this.state.pH}
                            </span>
                        }
                    >
                        pH值
                    </Item>
                </List>
                <List renderHeader={() => '筛选结果'} className="health-data">
                    <Item wrap>
                        根据您的体检数据，我们判断您的癌症患病概率为
                        <span className={this.state.cancerRisk < 0.5 ? "below" : "beyond"}>
                            {this.state.cancerRisk}
                        </span>，
                        <span className={this.state.cancerRisk < 0.5 ? "not-shown" : ""}>
                            大于(等于)0.5，建议您到医院进行进一步的检查和确诊。
                        </span>
                        <span className={this.state.cancerRisk < 0.5 ? "" : "not-shown"}>
                            小于0.5，您的患癌风险较低。
                        </span>
                    </Item>
                </List>
            </div>
        );
    }
}
