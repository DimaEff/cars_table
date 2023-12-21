import {FC, useState} from 'react';
import {CompanyDto} from "../../api/models/CompanyDto.ts";
import {css} from "@emotion/css";
import InfoSlot from "./InfoSlot.tsx";
import {IconButton} from "../Button";
import editIcon from '../../assets/editIcon.svg'
import checkIcon from '../../assets/checkIcon.svg'
import copyIcon from '../../assets/copyIcon.svg'
import logoutIcon from '../../assets/logoutIcon.svg'
import closeIcon from '../../assets/closeIcon.svg'
import refreshIcon from '../../assets/refreshIcon.svg'
import magicIcon from '../../assets/magicIcon.svg'
import {
    createShortLink,
    deleteShortLink,
    refreshBalance,
    refreshShortLink,
    saveCompanyName
} from "../../api/adminApi.ts";
import Typography from "../Typography/Typography.tsx";
import {Input} from "../Input";
import {useQuery} from "react-query";
import {QUERIES_KEYS} from "../../queriesKeys.ts";

interface CompanyProps {
    company: CompanyDto
}

const Company: FC<CompanyProps> = ({company}) => {
    const [editMode, setEditMode] = useState(false)
    const [companyName, setCompanyName] = useState(company.name)

    const {refetch} = useQuery(QUERIES_KEYS.GET_SETTINGS, {
        refetchOnWindowFocus: false,
        enabled: false,
    })

    const handleSaveCompany = async () => {
        await saveCompanyName({company_name: companyName})
        await refetch()
    }

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(company.short_link);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }

    return (
        <div
            className={css`
                display: flex;
                justify-content: space-between;
            `}
        >
            <InfoSlot description={'имя компании'}
                      rightIconSlot={<div>
                          <IconButton onClick={() => setEditMode(m => !m)}><img src={editIcon}/></IconButton>
                          {editMode && <IconButton onClick={handleSaveCompany}><img src={checkIcon}/></IconButton>}
                      </div>}>
                {editMode ? <Input value={companyName} onChange={e => setCompanyName(e.currentTarget.value)}/> :
                    <Typography color={'white'}>
                        {company.name}
                    </Typography>}
            </InfoSlot>

            <InfoSlot description={'короткая ссылка'}
                      rightIconSlot={<div className={css`display: flex;
                          gap: 2px;`}><IconButton onClick={copyLink}><img src={copyIcon}/></IconButton><IconButton><img
                          src={logoutIcon}/></IconButton></div>}
                      descriptionIconSlot={<div>
                          <div className={css`display: flex`}>
                              <IconButton onClick={deleteShortLink}>
                                  <img src={closeIcon}/>
                              </IconButton>
                              <IconButton onClick={refreshShortLink}>
                                  <img src={refreshIcon}/>
                              </IconButton>
                          </div>
                          <IconButton onClick={createShortLink}>
                              <img src={magicIcon}/>
                          </IconButton>
                      </div>}
            >
                <Typography color={'white'}>
                    {company.short_link}
                </Typography>
            </InfoSlot>

            <InfoSlot description={'RUB'} descriptionRightPosition
                      descriptionIconSlot={<IconButton onClick={refreshBalance}><img src={refreshIcon}/></IconButton>}>
                <Typography color={'white'}>
                    {company.balance}
                </Typography>
            </InfoSlot>
        </div>
    );
};

export default Company;