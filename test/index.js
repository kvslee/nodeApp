// This is just for organisation and reporting
describe('nodeApp Template Testing', function() {

    // This is the name of the test
    it('should distinguish the types of number', function() {
        if (1 == "1") {
            // Hope we don't get here.
            throw new Error("the number type should match.");
          }
      
          // Since no error thrown, test will pass.
    });

    it('should calculate mathematical operations', function(done) {
        if (5 == 2+3) {
            done();
        } else {
            done(new Error("Intelligent to calculate numbers"));
        }
    
    });


  });