var gr_group = new GlideRecord('sys_user_group');
gr_group.addQuery('active', true);
gr_group.query();
var row = 1;

while(gr_group.next()) {

  var gr_member = new GlideRecord('sys_user_grmember');
  gr_member.addQuery('group', gr_group.getValue('sys_id'));

  gr_member.query();
  
  if (gr_member.getRowCount() > 0) {
    gs.log(row + '. ' + gr_group.getValue('name'));
    row++;
    while(gr_member.next()) {
      var gr = new GlideRecord('sys_user');
      gr.get(gr_member.getValue('user'));
      gs.log('name: ' + gr.getValue('name'));
      
    }
  }
}

/*
 sysID ='aacb62e2c0a80015007f67f752c2b12c';
  var gr_member = new GlideRecord('sys_user_grmember');
  gr_member.addQuery('group', sysID);
  gr_member.query();
  
  if (gr_member.getRowCount() == 1) {
    gr_member.next();
    //var user = new GlideRecord('sys_user');
    //user.get(gr_member.getValue('sys_id'));
    gs.log(gr_member.getValue('group') + ' : ' + gr_member.getValue('sys_id'));
    } else {
    gs.log('False');
  }
*/

var user = new GlideRecord('sys_user');
//62826bf03710200044e0bfc8bcbe5df1
//user.get(gs.getUserID());
user.get('62826bf03710200044e0bfc8bcbe5df1');
/*
for (var key in user) {
    gs.log('key: ' + key + ' >> user-key: ' + user[key]);
}
*/
gs.log('user name: ' + user.name);
gs.log('user location name: ' + user.location.name);
gs.log('user location city: ' + user.location.city);
gs.log('user location street: ' + user.location.street);
gs.log('user location zip: ' + user.location.zip);
var loc = new GlideRecord('cmn_location');
loc.get(user.location);
gs.log('location name: ' + loc.name);
gs.log('---------------------------');
gs.log(user.get('62826bf03710200044e0bfc8bcbe5df1').location.name);