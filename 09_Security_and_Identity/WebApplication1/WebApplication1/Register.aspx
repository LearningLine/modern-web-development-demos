<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Register.aspx.cs" Inherits="WebApplication1.Register" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <asp:Label runat="server" ID="_message"></asp:Label>
        <div>
            Username:
            <asp:TextBox runat="server" ID="_username"></asp:TextBox>
        </div>
        <div>
            Password:
            <asp:TextBox runat="server" ID="_password"></asp:TextBox>
        </div>
        <div>
            <asp:Button runat="server" ID="_b" OnClick="_b_Click" Text="Register" /></div>
    </form>
</body>
</html>
