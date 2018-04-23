var React = require('react');

const backColor = {
    backgroundColor: '#3498DB'
}

const green = {
    color:'#0ADC00',
};

const link = {
    color:'#BFDEF3',
};

const fontsize1 = {
    fontSize: '14px',
    fontWeight: 400
};

const fontsize2 = {
    fontSize: '16px',
    textTransform: 'uppercase',
    fontWeight: 600
};


class Dashmarketcap extends React.Component {

    render () {
        return ( 
            <div className="col-sm-6" style={{ color:'#FFFFFF'}}>
                <div className="panel panel-body" style={backColor}>
                    <div className="row">
                        <div className="col-xs-1 mar-rgt">
                            <i className="fa fa-globe" style={{fontSize:60}}></i>
                        </div>
                        <div className="col-xs-10">
                            <p className="mar-no text-semibold add-tooltip" data-title="View More" data-placement="top" style={fontsize1}><a href="" style={link}>MARKET CAP OF $53.387 Billion</a></p>
                            <p className="mar-no text-semibold add-tooltip" data-title="USD/Eth change" data-placement="bottom" style={fontsize2}>
                                $539.72 @ 0.0654 BTC/ETH <small><font style={green}>(+4.32%)</font></small>
                            </p>
                        </div>
                    </div>
                    <div className="row pad-top" style={backColor}>
                        <div className="col-xs-6">
                            <br/>
                            <p><span style={fontsize2}><a href="" style={link}>Last Block</a></span> <br/> 5468415 (14.5s)</p>
                            <p><span style={fontsize1}><a href="" style={link}>Hash Rate</a></span> <br/> 252,137.39 GH/s </p>
                        </div>
                        <div className="col-xs-6" style={{textAlign: 'right'}}>
                            <br/>
                            <p><span style={fontsize2}><a href="" style={link}>Transactions</a></span> <br/> 205.54 M (11.5 TPS) </p>
                            <p><span style={fontsize1}><a href="" style={link}> Network Difficulty</a></span> <br/>  3,061.24 TH </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

module.exports = Dashmarketcap;