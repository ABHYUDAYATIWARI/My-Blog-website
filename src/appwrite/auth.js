import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";
export class AuthService{
    client=new Client();
    account;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account=new Account(this.client)
    }
    
    
    async createAccount({email,password,name}){
       
        try {
            const useracc=await this.account.create(ID.unique(),email,password,name);
            if (useracc) {
                console.log("created account succefully");
                this.login({email,password})
               
                
                return useracc
            } else {
                return useracc;
            }
        } catch (error) {
            throw error;
            
        }   
    }

    async login({email,password}){
        try {
            console.log("successfully logged in");
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            
        }
    }

    async getCurrentUser(){
       
        try {
            const datatemp=await this.account.get();
            console.log('data temp in auth',datatemp);
            return datatemp;
        } catch (error) {
            console.log("Appwrite :: getCurrentUser Error",error);
        }
        return null;
    }

    async logout(){
        try {
             await this.account.deleteSessions();
        } catch (error) {
            console.log("appwrite ::logout::error",error);
        }
    }
}
// console.log(conf.appwriteUrl);
// console.log(conf.appwriteProjectId);

const authService=new AuthService();
export default authService