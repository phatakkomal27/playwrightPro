/**
 * BASE CLASS - Demonstrates all three access modifiers
 * File: Task_16_april_2026/BaseClass.ts
 */

export class BaseClass {
    // ===== PUBLIC - Accessible everywhere =====
    public publicProperty: string = "I am PUBLIC";
    
    // ===== PRIVATE - Only accessible within this class =====
    private privateProperty: string = "I am PRIVATE";
    
    // ===== PROTECTED - Accessible in this class and derived classes only =====
    protected protectedProperty: string = "I am PROTECTED";

    // ===== PUBLIC METHOD =====
    public publicMethod(): string {
        return `Public method can access: ${this.publicProperty}`;
    }

    // ===== PRIVATE METHOD =====
    private privateMethod(): string {
        return `Private method can access: ${this.privateProperty}`;
    }

    // ===== PROTECTED METHOD =====
    protected protectedMethod(): string {
        return `Protected method can access: ${this.protectedProperty}`;
    }

    // ===== DEMONSTRATION - What each access level can access =====
    public demonstrateAccess(): void {
        console.log("=== Inside BaseClass ===");
        console.log("✓ Can access public:", this.publicProperty);
        console.log("✓ Can access private:", this.privateProperty);
        console.log("✓ Can access protected:", this.protectedProperty);
        console.log(this.publicMethod());
        console.log(this.privateMethod());
        console.log(this.protectedMethod());
    }
}

// ===== SUMMARY =====
// PUBLIC:    Accessible from anywhere (inside class, outside class, subclasses)
// PRIVATE:   ONLY accessible inside the class
// PROTECTED: Accessible inside class AND subclasses, but NOT from outside
