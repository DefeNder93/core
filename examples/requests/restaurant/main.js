var John = createVisitor('John','Rolls');
var Ada = createVisitor('Ada','Ramen');
Core.processGlobal();

Cook.putPlate({type: 'Ramen'})
Cook.putPlate({type: 'Sushi'});
Cook.putPlate({type: 'Rolls'});