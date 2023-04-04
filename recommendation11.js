// JavaScript code
const companies = [
    { name: 'Google', profile:'Web Dev', skills: ['JavaScript', 'React', 'Node.js', 'MongoDB'] },
    { name: 'Accenture', profile:'Web Dev', skills: ['Python', 'Django', 'SQL', 'AWS'] },
    { name: 'Amazon', profile:'App Dev', skills: ['Java', 'Spring', 'MySQL', 'Docker'] },
    { name: 'Microsoft', profile:'Web', skills: ['Ruby', 'Rails', 'PostgreSQL', 'Heroku'] },
    { name: 'Algo8', profile:'cloud', skills: ['C#', '.NET', 'SQL Server', 'Azure'] }
  ];
  
  const userSkills = "JavaScript, MySQl, Java, c#";
  const userSkillsArray = userSkills.split(',').map(skill => skill.trim());
  
  const matchingCompanies = companies.filter(company => company.skills.some(skill => userSkillsArray.includes(skill)));
  
  if (matchingCompanies.length === 0) {
    console.log('Sorry, we could not find a suitable job option for you.');
  } else {
    console.log('Based on your skills, the following companies may be a good match for you:');
    for (const company of matchingCompanies) {
      const missingSkills = company.skills.filter(skill => !userSkillsArray.includes(skill));
      if (missingSkills.length === 0) {
        console.log(`- ${company.name} ${company.profile}`);
      } else {
        console.log(`- ${company.name} for the profile of ${company.profile}(missing skills: ${missingSkills.join(', ')})`);
      }
    }
  }
  
 
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Company Recommendations</title>
    </head>
    <body>
      <h1>Company Recommendations</h1>
      <p>
        Based on your skills, the following companies may be a good match for you:
      </p>
      <ul>
        <!-- Loop through the matching companies and display them -->
        <% matchingCompanies.forEach(company => { %>
          <li>
            <strong><%= company.name %></strong> for the profile of <%= company.profile %>
            <% if (company.skills.length === 0) { %>
              (missing skills: none)
            <% } else { %>
              (missing skills: <%= company.skills.filter(skill => !userSkillsArray.includes(skill)).join(', ') %>)
            <% } %>
          </li>
        <% }); %>
      </ul>
      <% if (matchingCompanies.length === 0) { %>
        <p>Sorry, we could not find a suitable job option for you.</p>
      <% } %>
    </body>
  </html>
  