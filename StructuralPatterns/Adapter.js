/* 
- - - - - - - - - - - - - - - - - - - - - DESCRIPTION - - - - - - - - - - - - - - - - - - - -
The Adapter Design Pattern allows objects with incompatible interfaces to work together. 
It acts as a bridge between two incompatible interfaces, translating one interface into another 
without modifying the existing code.

- - - - - - - - - - - - - - - - - - - - KEY COMPONENTS - - - - - - - - - - - - - - - - - - -
Target: This is the interface that the client code expects to work with. It defines the methods 
or properties that the client code uses.

Adapter: This is the class that adapts the incompatible interface (Adaptee) into the Target 
interface. It contains an instance of the Adaptee and implements the methods required by the 
Target interface.

Adaptee: This is the class with the incompatible interface that needs to be adapted. It may 
have methods or properties that need to be mapped to the Target interface.

- - - - - - - - - - - - - - - - - - - - - BENEFITS - - - - - - - - - - - - - - - - - - - - - -
Compatibility: The Adapter pattern allows integration of incompatible classes or systems, 
promoting code reusability and integration.

Flexibility: It allows you to adapt classes with different interfaces without modifying their 
existing code.

Maintainability: The Adapter pattern simplifies maintenance by encapsulating the compatibility 
logic in a separate class.

*/

// ************************* Default Example: *************************

// Target
class Target {
    request() {
      throw new Error('request method must be implemented');
    }
  }
  
  // Adaptee
  class Adaptee {
    specificRequest() {
      console.log('Adaptee specific request');
    }
  }
  
  // Adapter (Class Adapter)
  class Adapter extends Target {
    constructor(adaptee) {
      super();
      this.adaptee = adaptee;
    }
  
    request() {
      console.log('Adapter is translating request...');
      this.adaptee.specificRequest();
    }
  }
  
  // Client Code
  const adaptee = new Adaptee();
  const adapter = new Adapter(adaptee);
  
  adapter.request();


  // ************************* Data Fetching Example: *************************

  class LegacyApi {
    fetchData() {
      // Simulate fetching data from a legacy API
      return { result: "Legacy Data" };
    }
  }
  
  class ModernApi {
    fetch() {
      // Simulate fetching data from a modern API
      return { data: "Modern Data" };
    }
  }
  
  class DataAdapter {
    constructor(api) {
      this.api = api;
    }
    
    fetchData() {
      if (this.api instanceof LegacyApi) {
        const legacyData = this.api.fetchData();
        return { result: legacyData.result };
      } else if (this.api instanceof ModernApi) {
        const modernData = this.api.fetch();
        return { result: modernData.data };
      }
    }
  }
  
  // Usage
  const legacyApi = new LegacyApi();
  const legacyAdapter = new DataAdapter(legacyApi);
  console.log(legacyAdapter.fetchData());
  
  const modernApi = new ModernApi();
  const modernAdapter = new DataAdapter(modernApi);
  console.log(modernAdapter.fetchData());




// ************************* External Library Example: *************************

class ThirdPartyChartingLibrary {
    plot(data) {
        // Simulate plotting data using a third-party library
        console.log(`Plotting data: ${data.join(", ")}`);
    }
    }
    
    class DataProvider {
    getData() {
        // Simulate fetching data from your own data source
        return [10, 20, 30, 40, 50];
    }
    }
    
    class DataAdapter {
    constructor(dataProvider) {
        this.dataProvider = dataProvider;
    }
    
    getFormattedData() {
        const rawData = this.dataProvider.getData();
        // Convert and format the data as needed by the third-party library
        return rawData.map(value => ({ y: value }));
    }
    }
    
    // Usage
    const chartingLibrary = new ThirdPartyChartingLibrary();
    const dataProvider = new DataProvider();
    const dataAdapter = new DataAdapter(dataProvider);
    
    const formattedData = dataAdapter.getFormattedData();
    chartingLibrary.plot(formattedData);
