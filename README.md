# Farm2Ngo

Farm2Ngo is a web application designed to bridge the gap between farmers with excessive crops and NGOs aiming to alleviate hunger and food insecurity. By leveraging technologies such as GoLang, Next.js, Solana for cross-border payments, and the Google Maps API, Farm2Ngo facilitates the efficient distribution of surplus crops from areas with low demand to regions where there is a greater need.

![image](https://go-file.s3.eu-north-1.amazonaws.com/Screenshot%20from%202024-07-21%2022-35-45.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiRzBFAiA2W48zeLUtHCS6dWMmkzOze2Cqt2SyiDu7w%2FxzV1ooxwIhAO1lUY9Q9f99rpBUZAFfP3aSmgRtl5YQVXCRlGjgoyMNKuQCCGEQABoMNzMwMzM1NDc3MTU4Igw3Dv%2B%2F9IGwzkYWfzoqwQKvi1DQwdfZFhgFhUlLQTa83Ns9Jejyu%2FUnPnjMg2nyKuty6CBJKDtRD4Ho0kiggoPzXEeoMhXlzRTHda%2BmJjKlBtSfvKS%2BxAdpluWrPRSHzPHfoeDIbeONDboAw95%2ButzeD1t25yixmrr5s5qCYiGWmP8PSGWbJDNg7cGiT2BRCjoDjTeARjGA%2FxdYyl3%2B%2Ffz9eHynRjnlvP0TlFULIgrS75yt6EaEyXByp46J3ltdlgKblMUFls1mH6zfvxqzLgKAwGhU69X1ONmTPP9LyKq2duBowvJX1ULFfGjOC3qprW6osYMZF04Ci06jVA72Zf5AsLZpAeGWAtna25nKJVKwx7c%2F1xVGbF2dS79VrG%2FUtrUCf4EAeHt5UpKi%2FnumgIAOToUvyqudltVKfgXmEaOQdO%2BJM6xhnMzuL92laPRxyYsw2uH0tAY6swLjiyQtJXaOHUrUdiDaQ%2F1Nrk2ajpKkeVnuspYZRnrI%2FKZXmdneqFebYBmn1nvPldJm7RX0R3pbq%2BGdxsFIGS27TMBv6sAXfb9H5LH5pEd2zXc%2BOr%2BL2Y5MIr3AOQvUROA1ZLV5HSq2w%2BknDZS7cRWKHmXdrXDMkDpTewg3g4%2B1I2OdQXtmbUH5ScdCkPbcnJTLqLyQEGB9PMKDS8zH%2BFT784mftj4ffbStdh%2B%2FrZT78Id3p%2FSiMpZiOMpeM5N5oGGoPzJndEGOrDGdgr4uTgg7dttboRINdqrcFKUp504t4ewWpOLcMO5kr4SPoEDdxLAH0rJiSf2tRki1CLCpBJWWCSlzHKJahaZnOTradEisDLRUcZaQ8pWeXAWORw%2BTg0LyRyjOBrMkkqdndTLpZMAh9OlY&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240721T170828Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA2UC3C7WTCNIU7TK3%2F20240721%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Signature=8384fa9dc36c1a1f61fe4ecd5d5ade45a4309e7281e92f8cc023607101bc813d)

![image](https://go-file.s3.eu-north-1.amazonaws.com/Screenshot%20from%202024-07-21%2022-35-25.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiRzBFAiA2W48zeLUtHCS6dWMmkzOze2Cqt2SyiDu7w%2FxzV1ooxwIhAO1lUY9Q9f99rpBUZAFfP3aSmgRtl5YQVXCRlGjgoyMNKuQCCGEQABoMNzMwMzM1NDc3MTU4Igw3Dv%2B%2F9IGwzkYWfzoqwQKvi1DQwdfZFhgFhUlLQTa83Ns9Jejyu%2FUnPnjMg2nyKuty6CBJKDtRD4Ho0kiggoPzXEeoMhXlzRTHda%2BmJjKlBtSfvKS%2BxAdpluWrPRSHzPHfoeDIbeONDboAw95%2ButzeD1t25yixmrr5s5qCYiGWmP8PSGWbJDNg7cGiT2BRCjoDjTeARjGA%2FxdYyl3%2B%2Ffz9eHynRjnlvP0TlFULIgrS75yt6EaEyXByp46J3ltdlgKblMUFls1mH6zfvxqzLgKAwGhU69X1ONmTPP9LyKq2duBowvJX1ULFfGjOC3qprW6osYMZF04Ci06jVA72Zf5AsLZpAeGWAtna25nKJVKwx7c%2F1xVGbF2dS79VrG%2FUtrUCf4EAeHt5UpKi%2FnumgIAOToUvyqudltVKfgXmEaOQdO%2BJM6xhnMzuL92laPRxyYsw2uH0tAY6swLjiyQtJXaOHUrUdiDaQ%2F1Nrk2ajpKkeVnuspYZRnrI%2FKZXmdneqFebYBmn1nvPldJm7RX0R3pbq%2BGdxsFIGS27TMBv6sAXfb9H5LH5pEd2zXc%2BOr%2BL2Y5MIr3AOQvUROA1ZLV5HSq2w%2BknDZS7cRWKHmXdrXDMkDpTewg3g4%2B1I2OdQXtmbUH5ScdCkPbcnJTLqLyQEGB9PMKDS8zH%2BFT784mftj4ffbStdh%2B%2FrZT78Id3p%2FSiMpZiOMpeM5N5oGGoPzJndEGOrDGdgr4uTgg7dttboRINdqrcFKUp504t4ewWpOLcMO5kr4SPoEDdxLAH0rJiSf2tRki1CLCpBJWWCSlzHKJahaZnOTradEisDLRUcZaQ8pWeXAWORw%2BTg0LyRyjOBrMkkqdndTLpZMAh9OlY&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240721T170838Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA2UC3C7WTCNIU7TK3%2F20240721%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Signature=f337c13dc457eafa9eceb4eceb535253a36597f4930ab331ea803c92972ab0fe)

[![Farm2Ngo Demo]()](https://youtu.be/SoRX44SpbPk?si=ZylnUJPBuU4DNeQ9)

## Features

- **Crop Redistribution**: Connects farmers with excess crops to NGOs in regions with high demand for those crops, minimizing waste and ensuring surplus food reaches those in need.

- **Cross-Border Payments**: Utilizes Solana blockchain technology for secure and efficient cross-border payments, facilitating transactions between farmers and NGOs.

- **Fundraising for Transportation and Miscellaneous Needs**: Enables NGOs to raise funds for transportation expenses and other miscellaneous necessities required for efficient crop distribution.

- **Learning Section**: Provides educational resources for farmers to learn about crop suitability based on season, soil type, and geographical location, empowering them to make informed agricultural decisions.

- **Global Search Feature**: Introduces a globe search functionality, allowing users to search for NGOs based on specific criteria such as location (city, country) or the type of crops they specialize in. 

## The Farm2Ngo project aligns with several UN Sustainable Development Goals (SDGs):

**Zero Hunger (SDG 2)**: By efficiently redistributing surplus crops to regions with high demand and facilitating access to food for those in need, Farm2Ngo contributes to the goal of ending hunger, achieving food security, improving nutrition, and promoting sustainable agriculture.

**Sustainable Cities and Communities (SDG 11)**: Through the global search feature, Farm2Ngo helps connect farmers and NGOs across different regions, contributing to the creation of sustainable and resilient communities by ensuring access to nutritious food.

**Responsible Consumption and Production (SDG 12)**: Farm2Ngo addresses the issue of food waste by facilitating the redistribution of excess crops, promoting more efficient use of resources and reducing environmental impacts associated with food production and disposal.

**Partnership for the Goals (SDG 17)**: The collaboration between farmers, NGOs, and technology providers in Farm2Ngo exemplifies the importance of partnerships in achieving sustainable development objectives, particularly in addressing complex challenges such as hunger and food insecurity.

## Technologies Used

- **GoLang**: Backend development language for efficient server-side processing.
- **Next.js**: React framework for building the frontend user interface, enabling fast and interactive web experiences.
- **Solana**: Blockchain platform used for secure and transparent cross-border payments.
- **Google Maps API**: Integration for location-based services, facilitating the mapping of surplus and demand regions.
