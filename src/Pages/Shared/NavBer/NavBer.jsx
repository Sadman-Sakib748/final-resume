import React, { useState } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import { MenuOutlined, HomeOutlined, UserOutlined, ContactsOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from './../../../assets/logo.png';

const { Header } = Layout;

const NavBer = () => {
    const [visible, setVisible] = useState(false);
    const navLinks = [
        { to: "/services", label: "Services", icon: <HomeOutlined /> },
        { to: "/works", label: "Works", icon: <UserOutlined /> },
        { to: "/resume", label: "Resume", icon: <ContactsOutlined /> },
        { to: "/skills", label: "Skills", icon: <ContactsOutlined /> },
        { to: "/testimonials", label: "Testimonials", icon: <ContactsOutlined /> },
        { to: "/contact", label: "Contact", icon: <ContactsOutlined /> },
    ];

    return (
        <Layout className="mx-auto">
            <Header className="flex items-center justify-between bg-[#001529] px-8 py-14">

                {/* Logo Section */}
                <div className="flex-shrink-0">
                    <Link to="/"><img  src={logo} alt="Logo" className="h-12 w-auto" /></Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex flex-1 justify-end">
                    <ul className="flex space-x-8 text-white text-lg font-medium">
                        {navLinks.map((link) => (
                            <li key={link.to} className="flex items-center gap-3 cursor-pointer px-3 py-2 hover:text-gray-300">
                                {link.icon}
                                <Link to={link.to}>{link.label}</Link>
                            </li>
                        ))}
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
                        {navLinks.map((link) => (
                            <Menu.Item key={link.to} icon={link.icon}>
                                <Link to={link.to}>{link.label}</Link>
                            </Menu.Item>
                        ))}
                    </Menu>
                </Drawer>
            </Header>
        </Layout>
    );
};

export default NavBer;
