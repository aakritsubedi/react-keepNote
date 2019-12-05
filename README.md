<h1>KeepNote-manage your notes<h1>
<hr>
<h3>Introduction</h3>
<p>
    <b>KeepNote</b> is a note-taking service developed using react.js. KeepNote is available on the web and offers a variety of tools for taking notes, including text and list.
</p>
<hr>
<h4>Application Screenshot</h4>
    <div style='height:250px;width:90%;margin:0 auto;'>
        <img src='react-keepNote.png' style='position:absolute;height:100%;width:100%;'>
    </div>
    <div style='height:150px;width:90%;margin:10px auto;'>
        <img src='react-keepNote1.png' style='position:absolute;height:100%;width:100%;'>
    </div>
<hr>
<h4>Explaination</h4>
<ul>
    <li>
        <u>Folder Structure</u>
        <ul>
            <li>Basic folder and boiler code structure is generated by react.</li>
            <li><b>src/components </b> all the components either functional or class based component</li>
            <li><b>src/constants </b> ...</li>
            <li><b>src/container </b> all the integration of the components together to form complete component with all related functionalities, generally class based component</li>
            <li><b>src/util </b> ...</li>
        </ul>
    </li>
    <li>
        <u>Code Explaination</u>
        <ul>
            <li>
                <b>src/components/Btn/Btn.js </b>
                    <p>Initially import all the necessary libraries, other components and files(css ..). As this <b>Btn.js</b> is functional component that should return the JSX component(here variable btn)</p>
            </li>
            <li>
                <b>src/container/Note.js</b>
                    <p>Initially import all the necessary libraries, other components and files(css ..). The containers manages all the states and functionalities so prefered as the class based component. Here Note.js container contains all the CRUD functionalites for the Note Keeping application. All the search functionalies for the search bar in the navigation is handled here.</p>
            </li>
        </ul>
        <b>same paradigm is followed for all the components and container and integrated in <code>App.js</code> as per requirements. </b>
    </li>
</ul>
<hr>
<h4>Installation</h4>
<ul>
    <li>Clone the repo</li>
    <ul>
        <li>route to the directory in terminal</li>
        <li>git clone git@github.com:aakritsubedi/react-keepNote.git</li>
        <li>open the folder in the editor of your choice</li> 
    </ul>
    <li>route to the directory in terminal</li>
    <li>yarn install/ npm install - installs all the dependencies and packages</li>
    <li>yarn start/ npm start</li>
    <b>-all the basic installation to run react application should be configured</b>
</ul>
<hr>
<h4>Extra Package</h4>
<ul>
    <li><a href='https://www.npmjs.com/package/react-table/v/6.8.6' target='_blank'>react-table v6.8.6</a></li>
    <li><a href='https://www.npmjs.com/package/react-icons' target='_blank'>react-icons</a></li>
    <li><a href='https://www.npmjs.com/package/react-moment' target='_blank'>moment</a></li>
</ul>
<code>
    <pre>
        <b>Name: </b> AAkrit Subedi
        <b>Email: </b> <a href='mailto:aakritsubedi9@gmail.com'>aakritsubedi9@gmail.com</a>
        <b>Website: </b> <a href='http://aakritsubedi.com.np/' target='_blank'>aakritsubedi.com.np</a> 
        <b>Address: </b> Kathmandu,Nepal
        <b>Contact No.: </b> +977-9808858237
        <b>Social Media: </b><a href='https://www.linkedin.com/in/aakrit-subedi-942a5875/'> linked/aakrit-subedi-942a5875 </a>||<a href='https://www.facebook.com/aakritsubedi9'> facebook/aakritsubedi9 </a>||<a href='https://www.facebook.com/aakritsubedi9'> instagram/aakrit_subedi </a>||<a href='https://www.youtube.com/channel/UCQa_5vTnUERh2qAGiObqizQ'> youtube/AAkrit Subedi</a>
    </pre>
<code>