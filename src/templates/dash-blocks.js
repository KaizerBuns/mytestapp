var React = require('react');
var moment = require('moment');

class Dashblocks extends React.Component {
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
	                    <h3 className="panel-title"><i className="fa fa-cubes"></i> Blocks</h3>
	                </div>
	                <div className="panel-body" style={{height:600,overflowY:'scroll'}}>
	                	 {this.props.jsondata.map((data, i) => {
	                        return (
	                        	<div className="panel media middle" key={i}>
				                    <div className="media-left bg-primary pad-all col-sm-3">
				                        <p><a href="">Block {data.blockNumber}</a></p> 
				                        <p> > {this.MyTimeAgo(data.createdAt)}</p>
				                    </div>
				                    <div className="media-body pad-lft">
				                        <p className="text-muted mar-bot">Mine By <a href="">{data.minedBy}</a></p>
										<p className="text-muted mar-bot"><a href="">{data.numTxs}</a> in {data.txTime}</p>
										<p className="text-muted mar-bot">Block Reward {data.blockReward}</p>
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

module.exports = Dashblocks;