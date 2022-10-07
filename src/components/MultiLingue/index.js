import React from 'react';
import { useState } from 'react';
import Select from 'react-select'
import brasil from '../../assets/img/Flag-Brazil.svg'
import EstadosUnidos from '../../assets/img/Flag-US.svg'
import Portugal from '../../assets/img/Flag-Portugal.svg'


const I18N_STORE_KEY = 'i18nextLng';
const options = [
    { value: 'pt-BR', label: <span className='flag'><img src={brasil} alt=''/> </span>},
    { value: 'pt-PT', label: <span className='flag'><img src={Portugal} alt=''/> </span>},
    { value: 'en-US', label: <span className='flag'><img src={EstadosUnidos} alt=''/> </span>},

  ]
const labelInicial = options.filter((option) => {
    return option.value === localStorage.getItem(I18N_STORE_KEY)
    })[0].label
    
function MultiLanguage() {
  const [language] = useState(localStorage.getItem(I18N_STORE_KEY));
  const [label, setLabel] = useState(labelInicial);
  const [open, setOpen] = useState(false);
  const handleSelectChance = (event) => {
    console.log(event.label);
    setLabel(event.label);
    localStorage.setItem(I18N_STORE_KEY, event.value);
    console.log(event.value);
    document.location.reload(true);
  };

  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: 'transparent', marginLeft: '2%', width:'80%', cursor: 'pointer',
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        color: '#D7DBEB',
        textAlign:'left',
        backgroundColor: 'transparent',
        width:'auto',
        cursor: 'pointer',
        width:'auto',

        ':hover': {
          ...styles[':hover'],
          backgroundColor: '#353C58',
          color: '#D7DBEB'
        }
      };
    },
    menu: (styles) => ({ ...styles, backgroundColor: 'transparenty', borderRadius:'4px', width:'auto',  marginLeft: '4%',}),
    menuList: (styles) => ({ ...styles, backgroundColor: 'transparent ', borderRadius:'4px', width:'127%'
  
  }),
    indicatorSeparator: (styles) => ({ ...styles, display: 'none'}),
    placeholder: (styles) => ({ ...styles, color: '#ffffff', ':hover': {color: '#9BA4CE'}}),
    container: (styles) => ({ ...styles, width:'135%', borderRadius:'4px'}),
  };

  return (
    <>

      <div className='select-language' style={open ? { height: '35px' } : { height: '35px' }}>
        <Select
          styles={colourStyles}
          imagem={true}
          closeMenuOnSelect={true}
          onMenuClose={() => setOpen(!open)}
          onMenuOpen={() => setOpen(!open)}
          onChange={handleSelectChance}
          className='select'
          options={options}
          value={language}
          placeholder={label}
          isSearchable={false} />
          
      </div>
    </>
  );
}
export default MultiLanguage;
