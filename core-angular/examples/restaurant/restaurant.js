angular.module('demoApp', ['ngCore'])
    .controller('MainController', function($scope, ngCore){
        ngCore.registerRequestPoint('Cook_putPlate');

        var Cook = ngCore.registerObj({
            putPlate: function(plate) {
                FireRequest(new ngCore.g.Cook_putPlate(plate), function(name) {
                    console.log('Cook: Visitor ' + name + ' take the plate ' + plate.type + ', it\'s time to cook new one!' );
                }, function() {
                    console.log('Cook: No one want to take it. I\'ll give that plate to a cate!' );
                });
            }
        });

        function createVisitor(name, preferredType) {
            return {
                preferredType: preferredType,
                name: name,
                takePlate: function() {
                    var _this = this;
                    var plate = ngCore.CatchRequest(ngCore.g.Cook_putPlate);

                    console.log(name + ": I see plateType " + plate.type);

                    if (plate.type === _this.preferredType) {
                        return function(success, error) {
                            console.log(name + ": uhhmmmm! I've eaten the " + plate.type);
                            success(name);
                        }
                    }
                }
            };
        }

        var John = ngCore.registerObj(createVisitor('John','Rolls'));
        var Ada = ngCore.registerObj(createVisitor('Ada','Ramen'));

        Cook.putPlate({type: 'Ramen'});
        Cook.putPlate({type: 'Sushi'});
        Cook.putPlate({type: 'Rolls'});
    });