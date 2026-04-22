/**
 * COMPREHENSIVE EXERCISE - Run this to see all examples
 * File: Task_16_april_2026/RunExercise.ts
 * 
 * This file demonstrates:
 * 1. Public access from everywhere
 * 2. Private access only within class
 * 3. Protected access in inheritance and NOT from outside
 * 4. Protected visibility across different modules/exports
 * 
 * Run with: ts-node RunExercise.ts
 */

import { BaseClass } from './BaseClass';
import { DerivedClass } from './DerivedClass';

console.log("\n");
console.log("████████████████████████████████████████████████████████");
console.log("   PUBLIC vs PRIVATE vs PROTECTED in TypeScript");
console.log("████████████████████████████████████████████████████████\n");

// ===== TEST 1: Base Class Demonstration =====
console.log("TEST 1: BASE CLASS - What each modifier can access");
console.log("─────────────────────────────────────────────────────────");
const baseObj = new BaseClass();
baseObj.demonstrateAccess();

// ===== TEST 2: Derived Class Demonstration =====
console.log("\n\nTEST 2: DERIVED CLASS - Inheritance access");
console.log("─────────────────────────────────────────────────────────");
const derivedObj = new DerivedClass();
derivedObj.demonstrateInheritedAccess();

// ===== TEST 3: External Access =====
console.log("\n\nTEST 3: EXTERNAL ACCESS - Outside the class hierarchy");
console.log("─────────────────────────────────────────────────────────");
console.log("From EXTERNAL code:");
console.log("✓ baseObj.publicProperty =", baseObj.publicProperty);
console.log("✓ baseObj.publicMethod() =", baseObj.publicMethod());

try {
    // This will cause TypeScript compilation error
    // console.log("✗ baseObj.privateProperty =", baseObj.privateProperty);
    console.log("✗ CANNOT access baseObj.privateProperty (private - not accessible)");
} catch (e) {
    console.log("ERROR: Private property not accessible");
}

try {
    // This will cause TypeScript compilation error
    // console.log("✗ baseObj.protectedProperty =", baseObj.protectedProperty);
    console.log("✗ CANNOT access baseObj.protectedProperty (protected - not accessible outside class)");
} catch (e) {
    console.log("ERROR: Protected property not accessible");
}

// ===== TEST 4: Summary Table =====
console.log("\n\nTEST 4: ACCESS MODIFIER VISIBILITY TABLE");
console.log("─────────────────────────────────────────────────────────");
console.log("Access Level  | Within Class | Derived Class | Different Module");
console.log("─────────────────────────────────────────────────────────");
console.log("PUBLIC        |     ✓        |      ✓        |      ✓");
console.log("PROTECTED     |     ✓        |      ✓        |      ✗");
console.log("PRIVATE       |     ✓        |      ✗        |      ✗");

// ===== TEST 5: Protected NOT accessible from different export =====
console.log("\n\nTEST 5: PROTECTED IN DIFFERENT MODULE/EXPORT");
console.log("─────────────────────────────────────────────────────────");

class TestDifferentModule {
    public test(): void {
        const base = new BaseClass();
        
        console.log("Trying to access BaseClass from different module:");
        console.log("✓ Can access public:", base.publicProperty);
        
        // TypeScript will show error on these:
        // console.log("✗ Protected not accessible:", base.protectedProperty);
        // console.log("✗ Private not accessible:", base.privateProperty);
        
        console.log("✗ Protected NOT accessible even in different export/module");
        console.log("✗ Private NOT accessible even in different export/module");
    }
}

const testModule = new TestDifferentModule();
testModule.test();

// ===== KEY LEARNINGS =====
console.log("\n\n████████████████████████████████████████████████████████");
console.log("KEY LEARNINGS:");
console.log("════════════════════════════════════════════════════════");
console.log(`
1. PUBLIC:
   - Accessible EVERYWHERE (same class, derived class, external code)
   - Use for methods/properties that should be publicly available
   - Example: API methods, utility functions
   
2. PRIVATE:
   - Accessible ONLY within the class itself
   - Completely hidden from inheritance and external access
   - NOT accessible even if exported/imported from different modules
   - Example: Internal calculations, helper methods
   
3. PROTECTED:
   - Accessible within the class AND in derived classes
   - NOT accessible from external code (even in different modules/folders)
   - Useful for creating methods/properties for inheritance only
   - Protected is for INHERITANCE hierarchy, not cross-module access
   - Example: Base methods that subclasses should override

4. PROTECTED WITH DIFFERENT EXPORTS:
   - Protected members are STILL NOT accessible from different modules
   - They remain restricted to the inheritance chain
   - Import/Export doesn't change protected visibility
   - File/Folder location doesn't affect protected accessibility
   
5. PRACTICAL EXAMPLE:
   - BaseClass with protectedMethod() = only BaseClass and DerivedClass can use
   - Different file/module trying to access protectedMethod() = ERROR
   - This ensures encapsulation and inheritance control
`);

console.log("════════════════════════════════════════════════════════\n");
