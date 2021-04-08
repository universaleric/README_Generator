function renderLicenseSection(license) {
    let licenseBadge = "";
        switch (license) {
          case 'MIT':
            licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)";
            break;
          case 'APACHE_2.0':
            licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break;
          case 'GPL_3.0':
            licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            break;
          case 'BSD_3':
            licenseBadge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
            break;
          case "None":
            licenseBadge = "";
            break;
          default:
            licenseBadge = "";
        }
        return licenseBadge;
    }