/**
 * DIFFERENT MODULE TEST - Protected access from different export
 * File: Task_16_april_2026/DifferentModule.ts
 * 
 * Key Question: What happens with protected when you use it in a different folder or export?
 * Answer: PROTECTED is STILL NOT accessible from different modules!
 */

import { BaseClass } from './BaseClass';

console.log("\n========== DIFFERENT MODULE/EXPORT TEST ==========\n");

class AnotherClass {
    public testProtectedFromDifferentModule(): void {
        const base = new BaseClass();
        
        console.log("From DIFFERENT MODULE trying to access BaseClass:");
        
        // ✓ Can access PUBLIC
        console.log("✓ Can access public:", base.publicProperty);
        console.log("✓ Can call public method:", base.publicMethod());
        
        // ✗ Cannot access PRIVATE
        // console.log("✗ Cannot access private:", base.privateProperty); // ERROR!
        console.log("✗ PRIVATE members NOT accessible");
        
        // ✗ Cannot access PROTECTED from different module!
        // console.log("✗ Cannot access protected:", base.protectedProperty); // ERROR!
        // base.protectedMethod(); // ERROR!
        console.log("✗ PROTECTED members NOT accessible (even from different module/export)");
        
        console.log("\n⚠️  IMPORTANT: Protected is only accessible within inheritance hierarchy!");
        console.log("   Not accessible from different modules or external classes");
    }
}

const another = new AnotherClass();
another.testProtectedFromDifferentModule();

// ===== DEMONSTRATES =====
// Protected is RESTRICTED to the inheritance chain
// It doesn't matter if it's a different file or different folder
// Protected is for INHERITANCE, not for external module access
