import React, { useState } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import { MenuOutlined, HomeOutlined, UserOutlined, ContactsOutlined } from "@ant-design/icons";
import logo from './../../../assets/logo.png';

const { Header } = Layout;

const NavBer = () => {
    const [visible, setVisible] = useState(false);

    return (
        <Layout className="mx-auto ">
            <Header className="flex items-center justify-between bg-[#001529] px-8 py-14">
                
                {/* Logo Section */}
                <div className="flex-shrink-0">
                    <img src={logo} alt="Logo" className="h-12 w-auto" />
                </div>
            
                {/* Desktop Menu */}
                <div className="hidden lg:flex flex-1 justify-end">
                    <ul className="flex space-x-8 text-white text-lg font-medium">
                        <li className="flex items-center gap-3 cursor-pointer px-3 py-2 hover:text-gray-300">
                            <HomeOutlined />
                            Services
                        </li>
                        <li className="flex items-center gap-3 cursor-pointer px-3 py-2 hover:text-gray-300">
                            <UserOutlined />
                            Works
                        </li>
                        <li className="flex items-center gap-3 cursor-pointer px-3 py-2 hover:text-gray-300">
                            <ContactsOutlined />
                            Resume
                        </li>
                        <li className="flex items-center gap-3 cursor-pointer px-3 py-2 hover:text-gray-300">
                            <ContactsOutlined />
                            Skills
                        </li>
                        <li className="flex items-center gap-3 cursor-pointer px-3 py-2 hover:text-gray-300">
                            <ContactsOutlined />
                            Testimonials
                        </li>
                        <li className="flex items-center gap-3 cursor-pointer px-3 py-2 hover:text-gray-300">
                            <ContactsOutlined />
                            Contact
                        </li>
                    </ul>
                </div>
            
                {/* Mobile Menu Button */}
                <Button
                    type="text"
                    icon={<MenuOutlined />}
                    className="lg:hidden text-white text-xl"
                    onClick={() => setVisible(true)}
                />
            
                {/* Mobile Drawer Menu */}
                <Drawer title="Menu" placement="right" onClose={() => setVisible(false)} open={visible}>
                    <Menu mode="vertical">
                        <Menu.Item key="1" icon={<HomeOutlined />}>Services</Menu.Item>
                        <Menu.Item key="2" icon={<UserOutlined />}>Works</Menu.Item>
                        <Menu.Item key="3" icon={<ContactsOutlined />}>Resume</Menu.Item>
                        <Menu.Item key="4" icon={<ContactsOutlined />}>Skills</Menu.Item>
                        <Menu.Item key="5" icon={<ContactsOutlined />}>Testimonials</Menu.Item>
                        <Menu.Item key="6" icon={<ContactsOutlined />}>Contact</Menu.Item>
                    </Menu>
                </Drawer>
            </Header>
        </Layout>
    );
};

export default NavBer;
