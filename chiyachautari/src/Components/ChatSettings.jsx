import { PeopleSettings,ChatSettingsTop, PhotosSettings,OptionsSettings } from 'react-chat-engine';


const Settings=()=>{
const handleLogout=()=>{
    localStorage.clear();
    window.location.reload();
}
    return(
        <div>
          <div>
        
          <button type="submit" className='logoutbutton' onClick={handleLogout}>
              <span>Logout</span>
            </button>

            
          </div>
           
            <ChatSettingsTop/>
            <PeopleSettings/>
            <PhotosSettings />
            <OptionsSettings/>
        </div>
        
    )
}

export default Settings