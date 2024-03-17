"use client"

import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react"

import Modal from "./Modal"
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthModal";


const AuthModal = () => {
    const supabaseClient = useSupabaseClient()
    const router = useRouter()
    const { session } = useSessionContext()
    const {onClose, isOpen } = useAuthModal()
    

    useEffect(() => {
        if (session) {
            router.refresh()
            onClose()
        }
    },[session, router, onClose])

    const onChange = (open: boolean) => {
        if (!open){
            onClose()
        }
    }
    
    return (
        <Modal title="" description="Login" isOpen={isOpen} onChange={onChange}>
            <Auth theme="dark" magicLink supabaseClient={supabaseClient} providers={["github"]} appearance={
                {
                    theme:ThemeSupa, 
                    variables: {
                        default: {
                            colors:{
                                brand: '#404040',
                                brandAccent: '#075985'
                            }
                        }
                    },
                }}  />
        </Modal>
    );
}
 
export default AuthModal;