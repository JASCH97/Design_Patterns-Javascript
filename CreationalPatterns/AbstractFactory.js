/*
- - - - - - - - - - - - - - - - - - - - DESCRIPTION - - - - - - - - - - - - - - - - - - - - 
The Abstract Factory Design Pattern provides an interface for creating families of related or 
dependent objects without specifying their concrete classes. It allows you to create objects 
that follow a common theme or have interrelated components, ensuring that the created objects 
are compatible and well-coordinated.

- - - - - - - - - - - - - - - - - - - - KEY COMPONENTS - - - - - - - - - - - - - - - - - - - 
Abstract Factory: This is the interface or abstract class that declares the creation methods 
for the different types of related products. Each method in the abstract factory corresponds 
to a family of product types.

Concrete Factory: These are the classes that implement the abstract factory interface. They 
produce instances of the concrete products.

Abstract Product: These are the interfaces or abstract classes that declare the methods that 
the concrete products must implement.

Concrete Product: These are the classes that implement the abstract product interface. They 
represent the actual objects that will be created by the concrete factories.

- - - - - - - - - - - - - - - - - - - - - BENEFITS - - - - - - - - - - - - - - - - - - - - - -
Provides a way to create families of related objects while ensuring compatibility and consistency.

Promotes loose coupling between client code and the specific classes being instantiated.

Supports the creation of different variations of objects by using different factories.
*/

// ************************* Furniture Example: *************************

// Abstract Products
class Chair {
    sit() {
      throw new Error('Chair sit method must be implemented');
    }
  }
  
  class Sofa {
    sit() {
      throw new Error('Sofa sit method must be implemented');
    }
  }
  
  // Concrete Products for Modern Style
  class ModernChair extends Chair {
    sit() {
      console.log('Sitting on a modern chair');
    }
  }
  
  class ModernSofa extends Sofa {
    sit() {
      console.log('Sitting on a modern sofa');
    }
  }
  
  // Concrete Products for Vintage Style
  class VintageChair extends Chair {
    sit() {
      console.log('Sitting on a vintage chair');
    }
  }
  
  class VintageSofa extends Sofa {
    sit() {
      console.log('Sitting on a vintage sofa');
    }
  }
  
  // Abstract Furniture Factory
  class FurnitureFactory {
    createChair() {
      throw new Error('createChair method must be implemented');
    }
  
    createSofa() {
      throw new Error('createSofa method must be implemented');
    }
  }
  
  // Concrete Furniture Factories
  class ModernFurnitureFactory extends FurnitureFactory {
    createChair() {
      return new ModernChair();
    }
  
    createSofa() {
      return new ModernSofa();
    }
  }
  
  class VintageFurnitureFactory extends FurnitureFactory {
    createChair() {
      return new VintageChair();
    }
  
    createSofa() {
      return new VintageSofa();
    }
  }
  
  // Client code
  function createFurniture(factory) {
    const chair = factory.createChair();
    const sofa = factory.createSofa();
  
    chair.sit();
    sofa.sit();
  }
  
  const modernFactory = new ModernFurnitureFactory();
  createFurniture(modernFactory);
  
  const vintageFactory = new VintageFurnitureFactory();
  createFurniture(vintageFactory);



  // ************************* Computers Example: *************************

  // Abstract Products
class CPU {
    process() {
      throw new Error('CPU process method must be implemented');
    }
  }
  
  class GPU {
    render() {
      throw new Error('GPU render method must be implemented');
    }
  }
  
  // Concrete Products for Gaming Setup
  class GamingCPU extends CPU {
    process() {
      console.log('Gaming CPU processing');
    }
  }
  
  class GamingGPU extends GPU {
    render() {
      console.log('Gaming GPU rendering');
    }
  }
  
  // Concrete Products for Office Setup
  class OfficeCPU extends CPU {
    process() {
      console.log('Office CPU processing');
    }
  }
  
  class OfficeGPU extends GPU {
    render() {
      console.log('Office GPU rendering');
    }
  }
  
  // Abstract Computer Factory
  class ComputerFactory {
    createCPU() {
      throw new Error('createCPU method must be implemented');
    }
  
    createGPU() {
      throw new Error('createGPU method must be implemented');
    }
  }
  
  // Concrete Computer Factories
  class GamingComputerFactory extends ComputerFactory {
    createCPU() {
      return new GamingCPU();
    }
  
    createGPU() {
      return new GamingGPU();
    }
  }
  
  class OfficeComputerFactory extends ComputerFactory {
    createCPU() {
      return new OfficeCPU();
    }
  
    createGPU() {
      return new OfficeGPU();
    }
  }
  
  // Client code
  function assembleComputer(factory) {
    const cpu = factory.createCPU();
    const gpu = factory.createGPU();
  
    cpu.process();
    gpu.render();
  }
  
  const gamingFactory = new GamingComputerFactory();
  assembleComputer(gamingFactory);
  
  const officeFactory = new OfficeComputerFactory();
  assembleComputer(officeFactory);

