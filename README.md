# Safety Analysis Project - AEP

## Project Overview
This project aims to enhance workplace safety for AEP by analyzing safety incidents and providing actionable insights. We utilized data-driven methods, including a Safety Risk Matrix and advanced visualizations, to identify trends, classify risks, and improve safety measures for field and line workers. The analysis is supported by the use of DistilBERT, a large language model, to extract insights from safety observations efficiently.

## Features
- **Safety Risk Matrix**: Categorizes safety incidents by frequency and severity, highlighting areas that require immediate intervention.
- **Data Visualizations**:
  - **Cumulative Safety Observations Over Time**: Line chart showing progress in identifying safety issues.
  - **SCL Model Classifications**: Bar graph displaying incident distribution across LSIF, HSIF, etc.
  - **Missing Data Analysis**: Bar graph highlighting areas with missing data for better data quality.
  - **Incidents by Month**: Bar graph illustrating seasonal trends in safety incidents.
  - **High Energy High Severity Sentiment Analysis**: Pie chart showing worker sentiment related to high-severity incidents.
- **Judging Criteria**: The project was evaluated based on accuracy, innovation, implementation, usability, impact, and adherence to guidelines.

## Technologies Used
- **Python**: For data analysis and visualization.
- **Pandas and Matplotlib**: To clean the dataset and create visualizations.
- **DistilBERT**: An open-source large language model used for analyzing and classifying comments related to safety incidents.

## Insights and Findings
- **High Severity Incidents**: A large number of incidents were classified as low frequency but high severity, indicating the need for urgent preventive measures.
- **Data Gaps**: Missing data analysis highlighted areas needing more data for better reliability.
- **Seasonal Patterns**: Incidents by month identified possible seasonal spikes that can help guide proactive safety measures.

## Recommendations
1. **Improve Safety Training**: Focus on high-risk, high-severity scenarios to better equip field workers.
2. **Reinforce Direct Controls**: Ensure safety controls are in place in high-energy environments.
3. **Enhance Data Quality**: Improve the categorization of incidents to ensure data accuracy.

## Next Steps
- **Real-Time Dashboard**: Implementing a real-time safety monitoring dashboard for proactive decision-making.
- **Refine Safety Analytics**: Continuously refine safety analytics processes to improve risk identification.

## How to Run the Project
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   ```
2. **Install Dependencies and Start**:
   ```bash
   npm install
   npm start
   ```

## Usage Instructions
- The visualizations provide insights into incident frequency, severity, and trends.
- Use the generated CSV files and charts to identify critical areas requiring safety interventions.

## Contributing
Contributions are welcome. Please open an issue or create a pull request for suggestions and improvements.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- **AEP** for providing the data used in the analysis.
- **Hugging Face** for providing the DistilBERT model.
