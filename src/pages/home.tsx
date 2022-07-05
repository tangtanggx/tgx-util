import React from "react";
import { Menu, Card, Col, Row, Breadcrumb, Layout } from "antd";
import "./home.css";
// import {
//     AppstoreOutlined,
//     MailOutlined,
//     SettingOutlined,
// } from "@ant-design/icons";

const items = [
    {
        label: "website组件",
        key: "website",
    },
    {
        label: "mobile组件",
        key: "mobile",
    },
];

export function Home() {
    return (
        <>
            <Layout className="layout">
                <Layout.Header><div className="logo" /><Menu theme="dark" mode="horizontal" items={items} />
                </Layout.Header>
                <Layout.Content style={{ padding: "0 50px" }}>
                    <Breadcrumb style={{ margin: "16px 0" }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-content">
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card title="Card title">
                                    Card content
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Card title">
                                    Card content
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Card title">
                                    Card content
                                </Card>
                            </Col>
                        </Row></div>
                </Layout.Content>
                <Layout.Footer style={{ textAlign: "center" }}>
                    Ant Design ©2022 Created by Tgx UED
                </Layout.Footer>
            </Layout>


        </>
    );
}
