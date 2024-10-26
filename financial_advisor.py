import streamlit as st
import requests

API_KEY = "---" # enter API KEY
USER_ID = "user"

def create_chat_session():
    create_session_url = 'https://api.on-demand.io/chat/v1/sessions'
    headers = {'apikey': API_KEY}
    body = {"pluginIds": [], "externalUserId": USER_ID}
    response = requests.post(create_session_url, headers=headers, json=body)
    session_data = response.json()
    return session_data['data']['id']

def query_chat(session_id, query):
    query_url = f'https://api.on-demand.io/chat/v1/sessions/{session_id}/query'
    headers = {'apikey': API_KEY}
    body = {
        "endpointId": "predefined-openai-gpt4o",
        "query": query,
        "pluginIds": [
                "plugin-1728314839",
                "plugin-1728287833",
                "plugin-1726253762",
                "plugin-1716455998"
    ],
    "responseMode": "sync"
    }
    response = requests.post(query_url, headers=headers, json=body)
    response_data = response.json()
    return response_data["data"]["answer"]

st.title("Trading Buddy")

def show_ui(prompt_to_user="How may I help you?"):
    if "messages" not in st.session_state:
        st.session_state.messages = [{"role": "assistant", "content": prompt_to_user}]
        st.session_state.session_id = create_chat_session()

    for message in st.session_state.messages:
        with st.chat_message(message["role"]):
            st.write(message["content"])

    if prompt := st.chat_input("What would you like to know?"):
        st.session_state.messages.append({"role": "user", "content": prompt})
        with st.chat_message("user"):
            st.write(prompt)

        with st.chat_message("assistant"):
            with st.spinner("Thinking..."):
                response = query_chat(st.session_state.session_id, prompt)
                st.write(response)
        
        st.session_state.messages.append({"role": "assistant", "content": response})

show_ui("What would you like to know today?")
