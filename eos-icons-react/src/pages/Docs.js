import React from 'react'
import DownloadEosIcons from '../components/DownloadEosIcons'
import DocsHeading from '../components/DocsHeading'
import DocsSubHeading from '../components/DocsSubHeading'
import DocsCode from '../components/DocsCode'

function Docs () {
  return (
    <div>
      <div className="docs">
        <DocsHeading heading="Installing EOS icons">
          <p>There are several options for you to use EOS icons in your product:</p>
          <DocsSubHeading heading="Installing with npm">  
            <DocsCode codes={["npm install eos-icons --save"]}/>
          </DocsSubHeading>
          <DocsSubHeading heading="With our CDN">
            <p>For EOS set: 
              <a href="https://cdn.jsdelivr.net/npm/eos-icons/dist/css/eos-icons.css" 
                data-event-category="External link" 
                data-event-action="Link to EOS Icons CDN" 
                data-event-label="Docs page" 
                target="_blank"
                rel="noopener noreferrer"> https://cdn.jsdelivr.net/npm/eos-icons/dist/css/eos-icons.css
                </a>
            </p>
            <DocsCode codes={["<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/eos-icons/dist/css/eos-icons.css'>"]} />
            <p>For Extended EOS set:
              <a href="https://cdn.jsdelivr.net/npm/eos-icons/dist/extended/css/eos-icons-extended.css" 
                data-event-category="External link" 
                data-event-action="Link to EOS Icons Extended CDN" 
                data-event-label="Docs page" 
                target="_blank"
                rel="noopener noreferrer"> https://cdn.jsdelivr.net/npm/eos-icons/dist/extended/css/eos-icons-extended.css
              </a>
            </p>
            <DocsCode codes={["<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/eos-icons/dist/extended/css/eos-icons-extended.css'>"]} />
            <p className="inline-p">
              Import them in your <p className="command-p"> &lt;head&gt;</p> tag as <p className="command-p"> link:css </p>.
            </p>
          </DocsSubHeading>
          <DocsSubHeading heading="or Download EOS as a zip file">  
            <p className="inline-p">
              To download the zip file of <p className="command-p"> /dist</p> folder click 
              <a href="https://gitlab.com/SUSE-UIUX/eos-icons/-/archive/master/eos-icons-master.zip?path=dist" 
                data-event-category="External link" 
                data-event-action="Link to EOS Icons zip file" 
                data-event-label="Docs page" 
                target="_blank"
                rel="noopener noreferrer"> here
              </a>
            </p>
          </DocsSubHeading>
        </DocsHeading>
        <DocsHeading heading="Using EOS icons in your projects">
          <p>Just like in any other iconic font, you need to add the Fonts and CSS files in your project:</p>
          <p className="inline-p">
            1- Add the <p className="command-p">eos-icons.css</p> file available under the dist/css folder into your project's <p className="command-p"> &lt;head&gt;</p>:
          </p>
          <DocsCode codes={["<link rel='stylesheet' href=''assets/eos-icons.css>"]} />
          <p>
            2- Make sure the font files available in <p className="command-p">thedist/fonts</p> folder are placed under your <p className="command-p">assets/fonts</p> folder so the .css file can read them correctly.
          </p>
          <p>
            3- Use the icons in your html as follows:
          </p>
          <DocsCode codes={["<i class='eos-icons'>LIGATURE_OF_THE_ICON</i>"]} />
          <p>
            Where the LIGATURE_OF_THE_ICON is the name of the icon. Use our &nbsp;
            <a href="https://eos-icons.eosdesignsystem.com/cheatsheet.html" 
              data-event-category="Internal link" 
              data-event-action="Link to cheatsheet" 
              data-event-label="Docs page" 
              target="_blank"
              rel="noopener noreferrer"> cheatsheet 
            </a>
            &nbsp; to see the icon's name.
          </p>
        </DocsHeading>
        <DocsHeading heading="Using Animated icons">
          <p>
            The animated EOS icons are built using CSS animations. To implement them you don't need ligatures but classes instead. For example:
          </p>
          <DocsCode codes={["<i class='eos-icons eos-icon-loading'></i>"]} />
          <p>
            See the other animated icons classes in our
            <a href="https://eos-icons.eosdesignsystem.com/cheatsheet.html" 
              data-event-category="Internal link" 
              data-event-action="Link to cheatsheet (animated)" 
              data-event-label="Docs page" 
              target="_blank"
              rel="noopener noreferrer"> demo page
            </a>
            . Click on the icon you want to use to see the codes snippet.
          </p>
        </DocsHeading>
        <DocsHeading heading="EOS extended version with Material Design">
          <p>
            Since EOS icons are designed following the&nbsp;
            <a href="https://material.io/design/iconography/system-icons.html" 
              data-event-category="External link" 
              data-event-action="Link to MD icons design principles" 
              data-event-label="Docs page" 
              target="_blank"
              rel="noopener noreferrer"> Material Design guidelines
            </a>
            &nbsp;and made to work together with Material Icons, we decided to include an extended version of EOS icons for easy implementation.
          </p>
          <p className="inline-p">
            With the extended version you only need to use 1 class for all icons (EOS and Material Design).
            To implement it, you need to grab the <p className="command-p"> css/ </p> and<p className="command-p"> font/ </p> folders available atdist/extended, 
            then add theeos-icons-extended.cssunder the <p className="command-p"> &lt;head&gt;</p> of your project accordingly.
          </p>
          <p>
            For more information about Material Design Icons, please refer to the &nbsp;
            <a href="https://github.com/google/material-design-icons" 
              data-event-category="External link" 
              data-event-action="Link to MD icons main page" 
              data-event-label="Docs page" 
              target="_blank"
              rel="noopener noreferrer">original MD icons repository
            </a> 
            &nbsp;where you can find the corresponding licensing and documentation. Example:
          </p>
          <DocsCode codes={[
            "<!-- This is an EOS icon --> \n",
            "<i class='eos-icons'>action_chains</i> \n",
            "\n",
            "<!-- This is a Material Design icon --> \n",
            "<i class='eos-icons'>bluetooth_disabled</i>",
          ]}/>
        </DocsHeading>
        <DocsHeading heading="Our recommended sizes">
          <p>Both MD icons and EOS icons have been designed to work and look perfect at: 18px, 24px, 36px, and 48px.</p>
          <p>In order to be compliant, follow MD icons class names to size both MD icons and EOS icons:</p>
          <DocsSubHeading heading="Implementation Examples">
            <ul>
              <li>
                <h4>Implementation example with MD icon</h4>
              </li>
              <i className="eos-icons md-18 mr-3">face</i>
              <i className="eos-icons md-24 mr-3">face</i>
              <i className="eos-icons md-36 mr-3">face</i>
              <i className="eos-icons md-48">face</i>
              <DocsCode codes={[
                "<i class='eos-icons md-18'>face</i> \n",
                "<i class='eos-icons md-24'>face</i> \n",
                "<i class='eos-icons md-36'>face</i> \n",
                "<i class='eos-icons md-48'>face</i> \n",
              ]} />
              <li>
                <h4>Implementation example with EOS icon</h4>
              </li>
              <i className="eos-icons md-18 mr-3">miscellaneous</i>
              <i className="eos-icons md-24 mr-3">miscellaneous</i>
              <i className="eos-icons md-36 mr-3">miscellaneous</i>
              <i className="eos-icons md-48">miscellaneous</i>
              <DocsCode codes={[
                "<i class='eos-icons md-18'>miscellaneous</i> \n",
                "<i class='eos-icons md-24'>miscellaneous</i> \n",
                "<i class='eos-icons md-36'>miscellaneous</i> \n",
                "<i class='eos-icons md-48'>miscellaneous</i> \n",
              ]} />
              <h4>SCSS code snippet</h4>
              <DocsCode codes={[
                "/* size variables */ \n",
                "$eos-md-18: 18px; \n",
                "$eos-md-24: 24px; \n",
                "$eos-md-36: 36px; \n",
                "$eos-md-48: 48px; \n",
                "\n",
                "/* Rules for sizing the icon. */ \n",
                ".md-18 { font-size: $eos-md-18; } \n",
                ".md-24 { font-size: $eos-md-24; } \n",
                ".md-36 { font-size: $eos-md-36; } \n",
                ".md-48 { font-size: $eos-md-48; } \n",
              ]} />
            </ul>
          </DocsSubHeading>
          <p>
            EOS icons is open source. 
            Go to our Gitlab repository to find out more :
            <a href="https://gitlab.com/SUSE-UIUX/eos-icons" 
              data-event-category="External link" 
              data-event-action="Link to Gitlab repository" 
              data-event-label="Docs page" 
              target="_blank"
              rel="noopener noreferrer"> https://gitlab.com/SUSE-UIUX/eos-icons
            </a>
          </p>
        </DocsHeading>
      </div>
      <DownloadEosIcons />
    </div>
  )
}

export default Docs
