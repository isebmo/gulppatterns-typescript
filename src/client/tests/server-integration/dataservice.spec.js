/* jshint -W117, -W030 */
/**
 *  Demonstrates use of bard's real $http and $q
 *  restoring the ability to make AJAX calls to the server
 *  while retaining all the goodness of ngMocks.
 *
 *  An alternative to the ngMidwayTester
 */

describe('Server: dataservice', function() {
    var dataservice;

    beforeEach(bard.asyncModule('app'));

    beforeEach(inject(function(_dataservice_) {
        dataservice = _dataservice_;
    }));

    describe('when call getCustomers', function() {

        it('should get 16 Customers', function(done) {
            dataservice.getCustomers()
                .then(function(data) {
                    expect(data).to.have.length(16);
                })
                .then(done, done);
        });

        it('should contain Sabrina Lebel', function(done) {
            dataservice.getCustomers()
                .then(function(data) {
                    var hasSabrinaLebel = data && data.some(function foundHer(customer) {
                            return customer.firstName.indexOf('Sabrina') >= 0;
                        });
                    expect(hasSabrinaLebel).to.be.true;
                })
                .then(done, done);
        });
    });

    describe('when call getCustomer', function() {

        it('should get Sabrina Lebel', function(done) {
            dataservice.getCustomer('1017109')
                .then(function(customer) {
                    var hasSabrinaLebel = customer.firstName === 'Sabrina';
                    expect(hasSabrinaLebel).to.be.true;
                })
                .then(done, done);
        });
    });
});
