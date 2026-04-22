/**
 * DERIVED CLASS - Shows inheritance access to protected/public members
 * File: Task_16_april_2026/DerivedClass.ts
 */

import { BaseClass } from './BaseClass';

export class DerivedClass extends BaseClass {
    public demonstrateInheritedAccess(): void {
        console.log("\n=== Inside DerivedClass (Derived from BaseClass) ===");
        
        // ✓ Can access PUBLIC in derived class
        console.log("✓ Can access public:", this.publicProperty);
        
        // ✓ Can access PROTECTED in derived class
        console.log("✓ Can access protected:", this.protectedProperty);
        
        // ✗ CANNOT access PRIVATE - it's not inherited
        // console.log("✗ Cannot access private:", this.privateProperty); // ERROR!
        
        // ✓ Can call public method
        console.log(this.publicMethod());
        
        // ✓ Can call protected method
        console.log(this.protectedMethod());
        
        // ✗ CANNOT call private method
        // console.log(this.privateMethod()); // ERROR!
    }

    // New method in derived class
    public overrideProtectedAccess(): string {
        return `Derived class using protected: ${this.protectedProperty}`;
    }
}

// ===== KEY TAKEAWAY =====
// ✓ Derived classes CAN access public and protected members
// ✗ Derived classes CANNOT access private members (they don't exist in inheritance chain)
