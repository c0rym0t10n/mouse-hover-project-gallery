# Material Design 3 (Material You) Implementation Guide

## 🎨 **Material Design 3 Buttons Implemented**

### **1. Filled Button (Primary Actions)**
Used for: Back buttons, primary CTAs
```css
.backButton {
    /* MD3 Filled Button */
    background: #1B1716;        /* Custom dark color */
    color: #FFFFFF;             /* On Primary */
    padding: 10px 24px;
    border-radius: 20px;        /* MD3 rounded corners */
    font-size: 14px;
    font-weight: 500;
    font-family: 'Roboto', system-ui, -apple-system, sans-serif;
    letter-spacing: 0.1px;
    line-height: 20px;
    min-height: 40px;
    border: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s cubic-bezier(0.2, 0.0, 0, 1.0);
    box-shadow: none; /* MD3 Elevation Level 0 */
}

.backButton:hover {
    background: #2A2520;        /* Lighter shade for hover */
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
}
```

### **2. Outlined Button (Secondary Actions)**
Used for: Download buttons, secondary CTAs
```css
.downloadButton {
    /* MD3 Outlined Button */
    background: transparent;
    color: #1B1716;             /* Custom dark color */
    padding: 10px 24px;
    border-radius: 20px;        /* MD3 rounded corners */
    font-size: 14px;
    font-weight: 500;
    font-family: 'Roboto', system-ui, -apple-system, sans-serif;
    letter-spacing: 0.1px;
    line-height: 20px;
    min-height: 40px;
    border: 1px solid #1B1716;  /* Custom dark outline */
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s cubic-bezier(0.2, 0.0, 0, 1.0);
    box-shadow: none;
}

.downloadButton:hover {
    background: rgba(27, 23, 22, 0.08); /* Custom dark/8% hover */
    border-color: #1B1716;
}
```

## 🎨 **Material Design 3 Color System**

### **Primary Colors (Custom)**
- **Primary**: `#1B1716` (Dark Brown/Black)
- **On Primary**: `#FFFFFF` (White text on primary)
- **Primary Hover**: `#2A2520` (Lighter shade for hover)
- **Primary Pressed**: `#141210` (Darker shade for pressed)

### **Surface Colors**
- **Surface**: `#FFFBFE`
- **On Surface**: `#1C1B1F`
- **Surface Variant**: `#E7E0EC`
- **On Surface Variant**: `#49454F`

### **Outline Colors**
- **Outline**: `#79747E`
- **Outline Variant**: `#CAC4D0`

## 📐 **Material Design 3 Specifications**

### **Button Heights**
- **Desktop**: 40px minimum height
- **Mobile (768px)**: 36px minimum height  
- **Small Mobile (480px)**: 32px minimum height

### **Border Radius**
- **Desktop**: 20px
- **Mobile (768px)**: 18px
- **Small Mobile (480px)**: 16px

### **Typography**
- **Font Family**: Roboto, system-ui, -apple-system, sans-serif
- **Font Weight**: 500 (Medium)
- **Font Size**: 14px
- **Letter Spacing**: 0.1px
- **Line Height**: 20px

### **Elevation**
- **Level 0**: No shadow (default state)
- **Level 1**: `box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);`

### **State Layers**
- **Hover**: Primary color with 8% opacity overlay
- **Focus**: 12% opacity overlay with focus ring
- **Pressed**: 12% opacity overlay
- **Disabled**: 12% opacity with disabled colors

### **Transitions**
- **Duration**: 0.2s
- **Easing**: `cubic-bezier(0.2, 0.0, 0, 1.0)` (MD3 Standard easing)

## 🔧 **Implementation Status**

### ✅ **Completed**
- [x] Filled buttons for Back navigation
- [x] Outlined buttons for Download PDF
- [x] Proper MD3 color scheme
- [x] Responsive design (desktop, tablet, mobile)
- [x] Hover and focus states
- [x] Material Design typography (Roboto font)
- [x] Proper elevation and shadows
- [x] MD3 border radius specifications
- [x] Accessibility focus rings

### 📱 **Applied to Pages**
- [x] CV page (`/cv`)
- [x] Reel page (`/reel`) 
- [x] Web page (`/web`)

## 💡 **Next Steps for Full MD3 Implementation**

1. **Add Material Icons**
   ```bash
   npm install @mui/icons-material @mui/material
   ```

2. **Text Buttons** (for less prominent actions)
3. **Tonal Buttons** (medium emphasis)
4. **FAB (Floating Action Button)** 
5. **Icon Buttons**
6. **Toggle Buttons**

## 📚 **Material Design 3 Resources**

- [Material Design 3 Guidelines](https://m3.material.io/)
- [Button Component Specs](https://m3.material.io/components/buttons/overview)
- [Color System](https://m3.material.io/styles/color/the-color-system/overview)
- [Typography Scale](https://m3.material.io/styles/typography/overview)

---
*Generated for Portfolio 2025 - Material Design 3 Implementation*
