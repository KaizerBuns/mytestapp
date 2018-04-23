var React = require('react');
var moment = require('moment');

class Dashtransactions extends React.Component {
	MyTimeAgo (mydate) {
		console.log(mydate)
		return moment(mydate).fromNow()
	}

	render () {
		console.log(this.props)
		var jsondata = this.props.jsondata;
		jsondata.sort(function(a, b) {
		    a = new Date(a.createdAt);
		    b = new Date(b.createdAt);
		    return a > b ? -1 : a < b ? 1 : 0;
		});
	  	return (
	        <div className="col-sm-6">
	            <div className="panel">
	                <div className="panel-heading">
	                	<div className="panel-control">
		                    <ul className="pager pager-rounded">
		                        <li><a href="">View All</a></li>
		                    </ul>
		                </div>
	                    <h3 className="panel-title"><i className="fa fa-reorder"></i> Transactions</h3>
	                </div>
	                <div className="panel-body" style={{height:600,overflowY:'scroll'}}>
	                	{this.props.jsondata.map((data, i) => {
	                        return (
	                        	<div className=" media middle" key={i}>
	                        		<div className="media-left col-sm-1"><h3 className="margin-top pull-left"><i className="fa fa-hdd-o"></i></h3></div>
				                    <div className="media-body">
				                    	<span className="pull-right">&gt; {this.MyTimeAgo(data.createdAt)}</span>
				                    	<div className="pad-lft">
					                        <h5 className="text-muted">TX# <a href="" className="text-info">{data.txNumber.substring(0, 25)} ...</a></h5>
											<p className="text-muted">From <a href="" className="text-info">{data.fromAddress.substring(0, 16)} ...</a> To <a href="" className="text-info">{data.toAddress.substring(0, 16)} ...</a></p>
											<p className="text-muted">Amount {data.amount}</p>
										</div>
										
				                    </div>
				                </div>
	                        )
	                    })}
	                </div>
	            </div>
	        </div>        
	  	);
	}
}

module.exports = Dashtransactions;