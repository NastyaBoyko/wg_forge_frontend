// this is an example of improting data from JSON
import orders from '../data/orders';
import companies from '../data/companies';
import users from '../data/users';

var table = document.createElement('table');

export default (function () {
	var thead = document.createElement('thead');
	thead.innerHTML = '<tr><th>Transaction ID</th><th>User Info</th><th>Order Date</th><th>Order Amount</th><th>Card Number</th><th>Card Type</th><th>Location</th></tr>'
	var tbody = document.createElement('tbody');
	var options = ['id', 'transaction_id', 'user_id', 'created_at', 'total', 'card_number', 'card_type', 'order_ip'];

	for (var i = 0; i < orders.length; i++) {
		var tr = document.createElement('tr');
		for (var j = 1; j < options.length; j++) {
			tr.setAttribute('id', 'order_' + orders[i][options[0]]);
			var td = document.createElement('td');
			if (options[j] == 'user_id') {
				td.setAttribute('class', 'user_data');
			}
			td.innerHTML = orders[i][options[j]];
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
	}
	table.appendChild(thead);
	table.appendChild(tbody);
	document.getElementById('app').appendChild(table);

}());
