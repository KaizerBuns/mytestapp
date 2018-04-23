var React = require('react');
var ReactHighcharts = require('react-highcharts');

var config = {
    chart: {
        height: 235
    },
    title: {
        text: '14 Day Transaction History'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
    }]
};

class Dashgraph extends React.Component {

    render () {
        return (
            <div className="col-sm-6">
                <div className="panel">
                    <div className="panel-body" style={{padding:0,margin:0}}>
                        <ReactHighcharts config={config}/>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Dashgraph;
