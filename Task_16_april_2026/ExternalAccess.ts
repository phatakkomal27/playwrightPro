/**
 * EXTERNAL ACCESS - Shows what can be accessed from outside the class
 * File: Task_16_april_2026/ExternalAccess.ts
 */

import { BaseClass } from './BaseClass';
import { DerivedClass } from './DerivedClass';

console.log("\n========== EXTERNAL ACCESS TEST ==========\n");

const base = new BaseClass();
const derived = new DerivedClass();

// ===== PUBLIC ACCESS FROM OUTSIDE =====
console.log("1. PUBLIC ACCESS (from outside):");
console.log("✓ Can access public property:", base.publicProperty);
console.log("✓ Can call public method:", base.publicMethod());

// ===== PRIVATE ACCESS FROM OUTSIDE =====
console.log("\n2. PRIVATE ACCESS (from outside):");
// console.log("✗ Cannot access private:", base.privateProperty); // ERROR!
// console.log("✗ Cannot call private method:", base.privateMethod()); // ERROR!
console.log("✗ PRIVATE members are NOT accessible from outside the class");

// ===== PROTECTED ACCESS FROM OUTSIDE =====
console.log("\n3. PROTECTED ACCESS (from outside):");
// console.log("✗ Cannot access protected:", base.protectedProperty); // ERROR!
// console.log("✗ Cannot call protected method:", base.protectedMethod()); // ERROR!
console.log("✗ PROTECTED members are NOT accessible from outside the class");
console.log("✗ Even though we can import and export, protected is still hidden outside class");

// ===== DEMONSTRATE INHERITED ACCESS =====
console.log("\n4. INHERITED CLASS ACCESS:");
const derivedInstance = new DerivedClass();
derivedInstance.demonstrateInheritedAccess();
console.log(derivedInstance.overrideProtectedAccess());

console.log("\n========== SUMMARY ==========");
console.log("From OUTSIDE the class:");
console.log("✓ PUBLIC:    Accessible");
console.log("✗ PRIVATE:   NOT Accessible");
console.log("✗ PROTECTED: NOT Accessible (even through export/import)");
console.log("\nFrom INSIDE Derived Class:");
console.log("✓ PUBLIC:    Accessible");
console.log("✓ PROTECTED: Accessible");
console.log("✗ PRIVATE:   NOT Accessible");
