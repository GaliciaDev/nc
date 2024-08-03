import React, { useState, useEffect, useRef } from 'react';
import '../assets/css/components/ViewEmployees.css';
import sysLogic from '../../../backend/models/site/dataCompany.json';
import eyeIcon from '../../../backend/assets/icons/forms/eye.png';
import searchIcon from '../../../backend/assets/icons/forms/searchInput.png';
import closeSearchIcon from '../../../backend/assets/icons/menu/close.svg';

const ViewEmployees = () => {
    const [employees, setEmployees] = useState([]);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortColumn, setSortColumn] = useState('');
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' o 'desc'
    const searchInputRef = useRef(null);

    useEffect(() => {
        setEmployees(sysLogic.dataEmployes);
    }, []);

    const togglePasswordVisibility = (employeeId) => {
        const newEmployees = employees.map(employee => {
            if (employee.id === employeeId) {
                return { ...employee, passwordVisible: !employee.passwordVisible };
            }
            return employee;
        });
        setEmployees(newEmployees);
    };

    const handleSearchIconClick = () => {
        setIsSearchActive(!isSearchActive);
        if (!isSearchActive) {
            setTimeout(() => searchInputRef.current.focus(), 0);
        } else {
            searchInputRef.current.value = '';
            setSearchTerm(''); // Reset search term when closing search
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    
        // Restablecer la visibilidad de la contraseña para todos los empleados a oculto
        const employeesWithHiddenPasswords = employees.map(employee => ({
            ...employee,
            passwordVisible: false
        }));
        setEmployees(employeesWithHiddenPasswords);
    };

    const getAreaNameById = (areaId) => {
        const area = sysLogic.TypeStatus.find(type => type.TypeId === areaId);
        return area ? area.name : 'N/R';
    };

    const getSpecialtyById = (areaId) => {
        const area = sysLogic.TypeStatus.find(type => type.TypeId === areaId);
        return area ? area.specialty : 'N/R';
    };

    const getBackgroundColorByTypeId = (typeId) => {
        switch (typeId) {
            case 1: return '#EE8B3D';
            case 2: return '#3CA5D4';
            case 3: return '#F0A4AE';
            case 4: return '#3CA5D4';
            case 5: return '#F5D770';
            case 6: return '#EF9A7C';
            case 7: return '#2C9B2B';
            case 8: return '#CDAECD';
            default: return '#696666cc';
        }
    };

    const toggleSortOrder = (column) => {
        if (sortColumn === column) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortOrder('asc');
        }
    };

    const sortEmployees = (employees) => {
        return [...employees].sort((a, b) => {
            let aValue = a[sortColumn];
            let bValue = b[sortColumn];
    
            // Manejar el caso especial de ordenar por 'specialty'
            if (sortColumn === 'specialty') {
                aValue = getSpecialtyById(a.Area);
                bValue = getSpecialtyById(b.Area);
            }
    
            if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });
    };

    const filteredAndSortedEmployees = sortEmployees(employees.filter(employee => {
        const areaName = getAreaNameById(employee.Area);
        const specialtyName = getSpecialtyById(employee.Area);
        return employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
               employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
               employee.id.toString().includes(searchTerm) ||
               areaName.toLowerCase().includes(searchTerm.toLowerCase()) ||
               specialtyName.toLowerCase().includes(searchTerm.toLowerCase());
    }));

    return (
        <div className="dashContainer">
            <div className='data__container'>
                <div className='title__container'>
                    <h2>Cuentas de correo</h2>
                    <div className='tSearch'>
                        <input ref={searchInputRef} type="text" placeholder="Buscar" onChange={handleSearchChange} />
                        <img src={isSearchActive ? closeSearchIcon : searchIcon} alt="search" onClick={handleSearchIconClick} />
                    </div>
                </div>
                <div className='databack__container'>
                    <div className='acount__container'>
                        <div className='acount__columns'>
                            <p onClick={() => toggleSortOrder('id')}>Id</p>
                            <p onClick={() => toggleSortOrder('name')}>Empleado</p>
                            <p onClick={() => toggleSortOrder('email')}>Correo</p>
                            <p>Contraseña</p>
                            <p onClick={() => toggleSortOrder('Area')}>Area</p>
                            <p onClick={() => toggleSortOrder('specialty')}>Cargo</p> 
                        </div>
                        <div className='acounts__rows'>
                            {filteredAndSortedEmployees.map((employee, index) => (
                                <div className={`employee ${index % 2 === 1 ? 'even-row' : ''}`} key={employee.id}>
                                    <p>{employee.id}</p>
                                    <div className="employee-info">
                                        <div className='img-container'><img src={employee.profileImg} alt="user" /></div>
                                        <p>{employee.name}</p>
                                    </div>
                                    <p>{employee.email}</p>
                                    <div className="pwd-container">
                                        <input className='pwd' type={employee.passwordVisible ? 'text' : 'password'} value={employee.password} readOnly />
                                        <img src={eyeIcon} alt="Show" className="toggle-password" onClick={() => togglePasswordVisibility(employee.id)} />
                                    </div>
                                    <p className='decoration' style={{backgroundColor: getBackgroundColorByTypeId(employee.Area)}}>{getAreaNameById(employee.Area)}</p>
                                    <p>{getSpecialtyById(employee.Area)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewEmployees;