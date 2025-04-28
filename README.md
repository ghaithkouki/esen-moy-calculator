
# ESEN Grade Calculator
---
A user-friendly web application designed for students of ESEN (École Supérieure d'Économie Numérique) to calculate their weighted averages across different course types and assessment methods.

## Live Demo
Check out the live demo: [ESEN Grade Calculator](https://ghaithkouki.github.io/esen-moy-calculator/)

## Features

- **Course Types:**
  - **Mix Courses:** Combines Exam (70%), DS1 (20%), and Other assessments (10%).
  - **CC Courses:** Combines DS1 (40%), DS2 (40%), and Other assessments (20%).
  - **Custom Input:** Allows direct entry of grades with custom coefficients.

- **Real-time Average Calculation**
- **Visual Card Display:** Display of all entered courses.
- **Pass/Fail Indication:** Based on the 9.95/20 passing threshold.
- **Course Deletion:** Remove individual course entries.

## Getting Started

### Prerequisites

- **Node.js** and **npm** must be installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/esen-grade-calculator.git
   ```

2. Navigate to the project directory:
   ```bash
   cd esen-grade-calculator
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to [http://localhost:5173/](http://localhost:5173/) (or the port shown in your terminal).

## Usage

1. Enter course information in one of the three input sections:
   - **Matiere Mix:** For courses with exams, DS1, and other assessments.
   - **Matiere CC:** For continuous assessment courses with DS1, DS2, and other assessments.
   - **Calculate By Moy:** For direct average entry with a coefficient.

2. Click the **"Ajouter la Note"** button to add the course to your list.

3. Once all courses are added, click **"Calculer la moyenne"** to view your overall average and pass/fail status.

4. Remove a course by clicking the **"X"** button on its card.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgements

- Built with **React.js**
- Designed specifically for ESEN students to simplify grade calculation.

---
